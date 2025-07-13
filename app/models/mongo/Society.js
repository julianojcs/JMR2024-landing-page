import mongoose from 'mongoose';
const { Schema, models, model } = mongoose;

const SocietySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  shortName: {
    type: String,
    required: true,
    trim: true
  },
  link: {
    type: String,
    required: false,
    trim: true,
    validate: {
      validator: function(v) {
        if (!v) return true; // Allow empty string
        try {
          new URL(v);
          return true;
        } catch {
          return false;
        }
      },
      message: 'Link must be a valid URL'
    }
  },
  alt: {
    type: String,
    required: false,
    trim: true,
    default: function() {
      return `Logo da ${this.shortName}`;
    }
  },
  src: {
    type: String,
    required: false,
    trim: true,
    default: ''
  },
  affiliates: [{
    name: {
      type: String,
      required: false,
      default: null,
      trim: true
    },
    email: {
      type: String,
      required: false,
      lowercase: true,
      trim: true,
      default: null,
      validate: {
        validator: function(v) {
          if (!v) return true; // Allow null/empty
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(v);
        },
        message: 'Affiliate email must be a valid email address'
      }
    },
    cpf: {
      type: String,
      required: false,
      trim: true,
      default: null,
      validate: {
        validator: function(v) {
          if (!v) return true; // Allow null/empty
          // Basic CPF format validation (XXX.XXX.XXX-XX or XXXXXXXXXXX)
          const cpfRegex = /^(\d{3}\.?\d{3}\.?\d{3}-?\d{2})$/;
          return cpfRegex.test(v.replace(/[^\d]/g, ''));
        },
        message: 'CPF must be in a valid format'
      }
    },
    isAffiliated: {
      type: Boolean,
      default: true
    }
  }]
}, {
  timestamps: true, // Automatically add createdAt and updatedAt
  collection: 'societies' // Explicitly set collection name
});

// Add indexes for better query performance
SocietySchema.index({ name: 1 });
SocietySchema.index({ shortName: 1 });
SocietySchema.index({ 'affiliates.email': 1 });
SocietySchema.index({ 'affiliates.cpf': 1 });

// Add virtual for full display name
SocietySchema.virtual('displayName').get(function() {
  return this.shortName ? `${this.name} (${this.shortName})` : this.name;
});

// Ensure virtual fields are serialized
SocietySchema.set('toJSON', { virtuals: true });
SocietySchema.set('toObject', { virtuals: true });

// Pre-save middleware to ensure data consistency
SocietySchema.pre('save', function(next) {
  // Ensure name and shortName are not empty
  if (!this.name || this.name.trim().length === 0) {
    return next(new Error('Name is required'));
  }
  if (!this.shortName || this.shortName.trim().length === 0) {
    return next(new Error('Short name is required'));
  }

  // Ensure each affiliate has at least email or cpf
  if (this.affiliates && this.affiliates.length > 0) {
    for (let affiliate of this.affiliates) {
      if (!affiliate.email && !affiliate.cpf) {
        return next(new Error('Each affiliate must have either email or CPF'));
      }
    }
  }

  next();
});

// Static methods
SocietySchema.statics.findByName = function(name) {
  return this.findOne({ name: new RegExp(name, 'i') });
};

SocietySchema.statics.findByShortName = function(shortName) {
  return this.findOne({ shortName: new RegExp(shortName, 'i') });
};

// CRUD methods
SocietySchema.statics.createSociety = function(societyData) {
  const society = new this(societyData);
  return society.save();
};

SocietySchema.statics.getAllSocieties = function(includeAffiliates = true) {
  const query = this.find({});
  if (!includeAffiliates) {
    query.select('-affiliates');
  }
  return query;
};

SocietySchema.statics.getSocietyById = function(id, includeAffiliates = true) {
  const query = this.findById(id);
  if (!includeAffiliates) {
    query.select('-affiliates');
  }
  return query;
};

SocietySchema.statics.updateSociety = function(id, updateData) {
  return this.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
};

SocietySchema.statics.deleteSociety = function(id) {
  return this.findByIdAndDelete(id);
};

SocietySchema.statics.findByAffiliateEmail = function(email) {
  return this.find({ 'affiliates.email': email.toLowerCase() });
};

SocietySchema.statics.findByAffiliateCpf = function(cpf) {
  return this.find({ 'affiliates.cpf': cpf });
};

SocietySchema.statics.findSocietiesByAffiliate = function(emailOrCpf) {
  const isEmail = emailOrCpf.includes('@');

  const query = isEmail
    ? { 'affiliates.email': emailOrCpf.toLowerCase() }
    : { 'affiliates.cpf': { $regex: emailOrCpf.replace(/[^\d]/g, ''), $options: 'i' } };

  return this.find(query).select('-affiliates');
};

SocietySchema.statics.updateAffiliateStatus = function(shortName, email, isAffiliated) {
  return this.updateOne(
    { shortName: shortName, 'affiliates.email': email.toLowerCase() },
    { $set: { 'affiliates.$.isAffiliated': isAffiliated } }
  );
};

// CSV Import method
SocietySchema.statics.importAffiliatesFromCSV = async function(societyShortName, csvContent) {
  const csv = require('csv-parser');
  const { Readable } = require('stream');

  return new Promise((resolve, reject) => {
    const results = [];
    const errors = [];
    let headerDetected = false;
    let fieldOrder = null;

    // Function to detect field order from header or first data row
    const detectFieldOrder = (row) => {
      const keys = Object.keys(row);
      const emailField = keys.find(key =>
        key.toLowerCase().includes('email') ||
        key.toLowerCase().includes('e-mail') ||
        key.toLowerCase().includes('mail')
      );
      const cpfField = keys.find(key =>
        key.toLowerCase().includes('cpf') ||
        key.toLowerCase().includes('documento')
      );
      const nameField = keys.find(key =>
        key.toLowerCase().includes('nome') ||
        key.toLowerCase().includes('name') ||
        (!emailField && !cpfField && keys[0]) // fallback to first field
      );

      return { email: emailField, cpf: cpfField, name: nameField };
    };

    // Function to validate email format
    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    // Function to validate CPF format (basic)
    const isValidCpf = (cpf) => {
      const cpfRegex = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
      return cpfRegex.test(cpf);
    };

    const stream = Readable.from([csvContent]);

    stream
      .pipe(csv())
      .on('data', (row) => {
        // Detect field order on first row
        if (!fieldOrder) {
          fieldOrder = detectFieldOrder(row);

          // Check if this looks like a header row
          const values = Object.values(row);
          const hasHeaderLikeValues = values.some(value =>
            value && (
              value.toLowerCase().includes('email') ||
              value.toLowerCase().includes('cpf') ||
              value.toLowerCase().includes('nome') ||
              value.toLowerCase().includes('name')
            )
          );

          if (hasHeaderLikeValues) {
            headerDetected = true;
            return; // Skip header row
          }
        }

        // Extract data based on detected field order
        const email = row[fieldOrder.email] ? row[fieldOrder.email].trim().toLowerCase() : null;
        const cpf = row[fieldOrder.cpf] ? row[fieldOrder.cpf].replace(/\D/g, '') : null;
        const name = row[fieldOrder.name] ? row[fieldOrder.name].trim() : null;

        // Validate required fields
        if (!email && !cpf) {
          errors.push(`Row missing both email and CPF: ${JSON.stringify(row)}`);
          return;
        }

        if (email && !isValidEmail(email)) {
          errors.push(`Invalid email format: ${email}`);
          return;
        }

        if (cpf && !isValidCpf(cpf)) {
          errors.push(`Invalid CPF format: ${cpf}`);
          return;
        }

        results.push({
          name: name || '',
          email: email || '',
          cpf: cpf || '',
          isAffiliated: true
        });
      })
      .on('end', async () => {
        try {
          if (results.length === 0) {
            return reject(new Error('No valid affiliates found in CSV'));
          }

          // Find the society
          const society = await this.findOne({ shortName: societyShortName });
          if (!society) {
            return reject(new Error(`Society not found: ${societyShortName}`));
          }

          // Add affiliates to society
          const addedAffiliates = [];
          const skippedAffiliates = [];

          for (const affiliate of results) {
            // Check if affiliate already exists
            const existingAffiliate = society.affiliates.find(a =>
              (affiliate.email && a.email === affiliate.email) ||
              (affiliate.cpf && a.cpf === affiliate.cpf)
            );

            if (existingAffiliate) {
              skippedAffiliates.push(affiliate);
            } else {
              society.affiliates.push(affiliate);
              addedAffiliates.push(affiliate);
            }
          }

          await society.save();

          resolve({
            success: true,
            societyId: society._id,
            societyName: society.name,
            totalProcessed: results.length,
            added: addedAffiliates.length,
            skipped: skippedAffiliates.length,
            errors: errors.length,
            errorDetails: errors,
            fieldOrder: fieldOrder,
            headerDetected: headerDetected
          });
        } catch (error) {
          reject(error);
        }
      })
      .on('error', reject);
  });
};

// Instance methods
SocietySchema.methods.addAffiliate = function(name, email, cpf, isAffiliated = true) {
  if (!email && !cpf) {
    throw new Error('Either email or CPF must be provided');
  }

  this.affiliates.push({
    name: name || null,
    email: email || null,
    cpf: cpf || null,
    isAffiliated: isAffiliated
  });

  return this.save();
};

SocietySchema.methods.removeAffiliate = function(emailOrCpf) {
  const isEmail = emailOrCpf.includes('@');

  if (isEmail) {
    this.affiliates = this.affiliates.filter(affiliate =>
      affiliate.email !== emailOrCpf.toLowerCase()
    );
  } else {
    const cleanCpf = emailOrCpf.replace(/[^\d]/g, '');
    this.affiliates = this.affiliates.filter(affiliate =>
      affiliate.cpf && affiliate.cpf.replace(/[^\d]/g, '') !== cleanCpf
    );
  }

  return this.save();
};

SocietySchema.methods.updateAffiliate = function(emailOrCpf, updateData) {
  const isEmail = emailOrCpf.includes('@');
  let affiliate;

  if (isEmail) {
    affiliate = this.affiliates.find(a => a.email === emailOrCpf.toLowerCase());
  } else {
    const cleanCpf = emailOrCpf.replace(/[^\d]/g, '');
    affiliate = this.affiliates.find(a =>
      a.cpf && a.cpf.replace(/[^\d]/g, '') === cleanCpf
    );
  }

  if (affiliate) {
    // Only update allowed fields: name, email, isAffiliated
    if (updateData.name !== undefined) {
      affiliate.name = updateData.name;
    }
    if (updateData.email !== undefined) {
      affiliate.email = updateData.email;
    }
    if (updateData.isAffiliated !== undefined) {
      affiliate.isAffiliated = updateData.isAffiliated;
    }
  }

  return this.save();
};

SocietySchema.methods.hasAffiliates = function() {
  return this.affiliates && this.affiliates.length > 0;
};

SocietySchema.methods.getAffiliateByEmail = function(email) {
  return this.affiliates.find(affiliate => affiliate.email === email.toLowerCase());
};

SocietySchema.methods.getAffiliateByCpf = function(cpf) {
  const cleanCpf = cpf.replace(/[^\d]/g, '');
  return this.affiliates.find(affiliate =>
    affiliate.cpf && affiliate.cpf.replace(/[^\d]/g, '') === cleanCpf
  );
};

SocietySchema.methods.getActiveAffiliates = function() {
  return this.affiliates.filter(affiliate => affiliate.isAffiliated === true);
};

SocietySchema.methods.getInactiveAffiliates = function() {
  return this.affiliates.filter(affiliate => affiliate.isAffiliated === false);
};

SocietySchema.methods.toggleAffiliateStatus = function(emailOrCpf) {
  const isEmail = emailOrCpf.includes('@');
  let affiliate;

  if (isEmail) {
    affiliate = this.affiliates.find(a => a.email === emailOrCpf.toLowerCase());
  } else {
    const cleanCpf = emailOrCpf.replace(/[^\d]/g, '');
    affiliate = this.affiliates.find(a =>
      a.cpf && a.cpf.replace(/[^\d]/g, '') === cleanCpf
    );
  }

  if (affiliate) {
    affiliate.isAffiliated = !affiliate.isAffiliated;
  }

  return this.save();
};

// CRUD Instance Methods
SocietySchema.methods.updateSocietyData = function(updateData) {
  const allowedFields = ['name', 'shortName', 'link', 'alt', 'src'];

  allowedFields.forEach(field => {
    if (updateData[field] !== undefined) {
      this[field] = updateData[field];
    }
  });

  return this.save();
};

SocietySchema.methods.clearAllAffiliates = function() {
  this.affiliates = [];
  return this.save();
};

SocietySchema.methods.bulkAddAffiliates = function(affiliatesArray) {
  const validAffiliates = affiliatesArray.filter(affiliate => {
    return affiliate.email || affiliate.cpf;
  });

  this.affiliates.push(...validAffiliates);
  return this.save();
};

SocietySchema.methods.getAffiliatesStats = function() {
  const total = this.affiliates.length;
  const active = this.affiliates.filter(a => a.isAffiliated === true).length;
  const inactive = total - active;
  const withEmail = this.affiliates.filter(a => a.email).length;
  const withCpf = this.affiliates.filter(a => a.cpf).length;
  const withBoth = this.affiliates.filter(a => a.email && a.cpf).length;

  return {
    total,
    active,
    inactive,
    withEmail,
    withCpf,
    withBoth
  };
};

SocietySchema.methods.exportAffiliatesToCSV = function(includeInactive = false) {
  const affiliates = includeInactive
    ? this.affiliates
    : this.affiliates.filter(a => a.isAffiliated === true);

  if (affiliates.length === 0) {
    return 'name,email,cpf,isAffiliated\n';
  }

  const csvLines = ['name,email,cpf,isAffiliated'];

  affiliates.forEach(affiliate => {
    const line = [
      affiliate.name || '',
      affiliate.email || '',
      affiliate.cpf || '',
      affiliate.isAffiliated
    ].map(field => `"${field}"`).join(',');

    csvLines.push(line);
  });

  return csvLines.join('\n');
};

// Export the model
const Society = models.Society || model('Society', SocietySchema);

export default Society;
