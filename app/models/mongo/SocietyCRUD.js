/**
 * Society CRUD and CSV Import Examples
 * Demonstrates how to use the Society model with full CRUD operations
 * and CSV import functionality
 */

const Society = require('./Society');

// =====================================
// CRUD OPERATIONS EXAMPLES
// =====================================

/**
 * Create a new society
 */
async function createSociety() {
  try {
    const societyData = {
      name: "Sociedade Brasileira de Radiologia",
      shortName: "SBR",
      link: "https://sbr.org.br",
      src: "/images/sbr-logo.png",
      // alt will be auto-generated as "Logo da SBR"
      affiliates: [
        {
          name: "Dr. João Silva",
          email: "joao@sbr.org.br",
          cpf: "123.456.789-10",
          isAffiliated: true
        }
      ]
    };

    const society = await Society.createSociety(societyData);
    console.log('Society created:', society.displayName);
    return society;
  } catch (error) {
    console.error('Error creating society:', error.message);
  }
}

/**
 * Get all societies
 */
async function getAllSocieties() {
  try {
    const societies = await Society.getAllSocieties();
    console.log(`Found ${societies.length} societies`);
    return societies;
  } catch (error) {
    console.error('Error getting societies:', error.message);
  }
}

/**
 * Get society by ID
 */
async function getSocietyById(id) {
  try {
    const society = await Society.getSocietyById(id);
    if (society) {
      console.log('Society found:', society.displayName);
      return society;
    } else {
      console.log('Society not found');
    }
  } catch (error) {
    console.error('Error getting society:', error.message);
  }
}

/**
 * Update society
 */
async function updateSociety(id, updateData) {
  try {
    const society = await Society.updateSociety(id, updateData);
    console.log('Society updated:', society.displayName);
    return society;
  } catch (error) {
    console.error('Error updating society:', error.message);
  }
}

/**
 * Delete society
 */
async function deleteSociety(id) {
  try {
    const deletedSociety = await Society.deleteSociety(id);
    if (deletedSociety) {
      console.log('Society deleted:', deletedSociety.displayName);
    }
    return deletedSociety;
  } catch (error) {
    console.error('Error deleting society:', error.message);
  }
}

// =====================================
// CSV IMPORT EXAMPLES
// =====================================

/**
 * Example CSV with headers
 */
const csvWithHeaders = `
name,email,cpf
"Dr. Maria Santos","maria@sbr.org.br","987.654.321-00"
"Dr. Carlos Lima","carlos@sbr.org.br","111.222.333-44"
"Dra. Ana Costa","ana@sbr.org.br","555.666.777-88"
`.trim();

/**
 * Example CSV without headers (email, cpf, name order)
 */
const csvWithoutHeaders = `
"pedro@sbr.org.br","123.456.789-10","Dr. Pedro Oliveira"
"lucia@sbr.org.br","987.654.321-11","Dra. Lucia Ferreira"
"roberto@sbr.org.br","456.789.123-22","Dr. Roberto Silva"
`.trim();

/**
 * Example CSV with mixed order (cpf, name, email)
 */
const csvMixedOrder = `
"111.222.333-44","Dr. Fernando Costa","fernando@sbr.org.br"
"555.666.777-88","Dra. Camila Santos","camila@sbr.org.br"
`.trim();

/**
 * Import affiliates from CSV
 */
async function importAffiliatesFromCSV(shortName, csvText, description = '') {
  try {
    console.log(`\n=== Importing CSV ${description} ===`);
    console.log('CSV Text:');
    console.log(csvText);

    const result = await Society.importAffiliatesFromCSV(shortName, csvText);

    console.log('\n✅ Import successful!');
    console.log(`Imported ${result.importedCount} affiliates`);
    console.log('Field order detected:', result.fieldOrder);
    console.log('Has header:', result.hasHeader);
    console.log('Society affiliates count:', result.society.affiliates.length);

    return result;
  } catch (error) {
    console.error('❌ CSV Import error:', error.message);
  }
}

// =====================================
// AFFILIATE MANAGEMENT EXAMPLES
// =====================================

/**
 * Manage affiliates
 */
async function manageAffiliates(societyId) {
  try {
    const society = await Society.getSocietyById(societyId);
    if (!society) {
      console.log('Society not found');
      return;
    }

    // Add individual affiliate
    await society.addAffiliate("Dr. Novo Membro", "novo@sbr.org.br", "999.888.777-66");

    // Update affiliate
    await society.updateAffiliate("novo@sbr.org.br", {
      name: "Dr. Novo Membro Atualizado",
      isAffiliated: true
    });

    // Toggle affiliate status
    await society.toggleAffiliateStatus("novo@sbr.org.br");

    // Get stats
    const stats = society.getAffiliatesStats();
    console.log('Affiliates stats:', stats);

    // Export to CSV
    const csvExport = society.exportAffiliatesToCSV(true); // include inactive
    console.log('Exported CSV:', csvExport);

    return society;
  } catch (error) {
    console.error('Error managing affiliates:', error.message);
  }
}

// =====================================
// SEARCH EXAMPLES
// =====================================

/**
 * Search operations
 */
async function searchOperations() {
  try {
    // Find by name
    const societyByName = await Society.findByName("Radiologia");
    console.log('Found by name:', societyByName?.displayName);

    // Find by short name
    const societyByShort = await Society.findByShortName("SBR");
    console.log('Found by short name:', societyByShort?.displayName);

    // Find by affiliate email
    const societiesByEmail = await Society.findByAffiliateEmail("joao@sbr.org.br");
    console.log(`Found ${societiesByEmail.length} societies with affiliate email`);

    // Find by affiliate CPF
    const societiesByCpf = await Society.findByAffiliateCpf("123.456.789-10");
    console.log(`Found ${societiesByCpf.length} societies with affiliate CPF`);

    // Find societies by affiliate (without affiliate data)
    const societiesClean = await Society.findSocietiesByAffiliate("joao@sbr.org.br");
    console.log(`Found ${societiesClean.length} societies (clean data)`);

  } catch (error) {
    console.error('Error in search operations:', error.message);
  }
}

// =====================================
// COMPLETE WORKFLOW EXAMPLE
// =====================================

/**
 * Complete workflow demonstration
 */
async function completeWorkflow() {
  try {
    console.log('🚀 Starting Society CRUD and CSV Import Workflow\n');

    // 1. Create a new society
    console.log('1. Creating society...');
    const society = await createSociety();
    if (!society) return;

    // 2. Import CSV with headers
    console.log('\n2. Importing CSV with headers...');
    await importAffiliatesFromCSV(society.shortName, csvWithHeaders, '(with headers)');

    // 3. Import CSV without headers
    console.log('\n3. Importing CSV without headers...');
    await importAffiliatesFromCSV(society.shortName, csvWithoutHeaders, '(without headers)');

    // 4. Import CSV with mixed order
    console.log('\n4. Importing CSV with mixed order...');
    await importAffiliatesFromCSV(society.shortName, csvMixedOrder, '(mixed order)');

    // 5. Manage affiliates
    console.log('\n5. Managing affiliates...');
    await manageAffiliates(society._id);

    // 6. Search operations
    console.log('\n6. Performing search operations...');
    await searchOperations();

    // 7. Update society data
    console.log('\n7. Updating society data...');
    await updateSociety(society._id, {
      link: "https://new-sbr.org.br",
      alt: "Updated Logo da SBR"
    });

    console.log('\n✅ Workflow completed successfully!');

  } catch (error) {
    console.error('❌ Workflow error:', error.message);
  }
}

// =====================================
// ADDITIONAL CRUD AND SEARCH METHODS
// =====================================

/**
 * Find societies by affiliate email
 */
async function findByAffiliateEmail(email) {
  try {
    const societies = await Society.findByAffiliateEmail(email);
    console.log(`Found ${societies.length} societies with affiliate email: ${email}`);
    return societies;
  } catch (error) {
    console.error('Error finding by affiliate email:', error.message);
  }
}

/**
 * Find societies by affiliate CPF
 */
async function findByAffiliateCpf(cpf) {
  try {
    const societies = await Society.findByAffiliateCpf(cpf);
    console.log(`Found ${societies.length} societies with affiliate CPF: ${cpf}`);
    return societies;
  } catch (error) {
    console.error('Error finding by affiliate CPF:', error.message);
  }
}

/**
 * Update affiliate status
 */
async function updateAffiliateStatus(shortName, email, isAffiliated) {
  try {
    const result = await Society.updateAffiliateStatus(shortName, email, isAffiliated);
    if (result.modifiedCount > 0) {
      console.log(`Affiliate status updated for ${email} in ${shortName}`);
    } else {
      console.log(`No affiliate found with email ${email} in society ${shortName}`);
    }
    return result;
  } catch (error) {
    console.error('Error updating affiliate status:', error.message);
  }
}

/**
 * Complete test suite with all new methods
 */
async function completeTestSuite() {
  try {
    console.log('\n=== Starting Complete Test Suite ===');

    // 1. Create test society
    const society = await createSociety();

    // 2. Test CSV import with different formats
    const csvData1 = `nome,email,cpf
Dr. Pedro Costa,pedro.costa@email.com,11122233344
Dra. Ana Oliveira,ana.oliveira@email.com,55566677788`;

    const csvData2 = `email,cpf,nome
carlos.lima@email.com,99988877766,Dr. Carlos Lima
fernanda.silva@email.com,44455566677,Dra. Fernanda Silva`;

    await importAffiliatesFromCSV(society.shortName, csvData1, '(format 1)');
    await importAffiliatesFromCSV(society.shortName, csvData2, '(format 2)');

    // 3. Test search by affiliate
    await findByAffiliateEmail('pedro.costa@email.com');
    await findByAffiliateCpf('11122233344');

    // 4. Test affiliate status update
    await updateAffiliateStatus(society.shortName, 'ana.oliveira@email.com', false);

    // 5. Get final stats
    const updatedSociety = await getSocietyById(society._id);
    console.log('\n=== Final Society Stats ===');
    console.log(`Society: ${updatedSociety.name}`);
    console.log(`Total affiliates: ${updatedSociety.affiliates.length}`);
    console.log(`Active affiliates: ${updatedSociety.getActiveAffiliates().length}`);
    console.log(`Inactive affiliates: ${updatedSociety.getInactiveAffiliates().length}`);

    // 6. Export CSV
    const csvExport = updatedSociety.exportAffiliatesToCSV(true);
    console.log('\n=== CSV Export Sample ===');
    console.log(csvExport.substring(0, 200) + '...');

    // 7. Clean up
    await deleteSociety(society._id);
    console.log('\n=== Test completed and cleaned up ===');

  } catch (error) {
    console.error('Complete test suite error:', error.message);
  }
}

// Export functions for use
module.exports = {
  createSociety,
  getAllSocieties,
  getSocietyById,
  updateSociety,
  deleteSociety,
  importAffiliatesFromCSV,
  manageAffiliates,
  searchOperations,
  completeWorkflow,
  findByAffiliateEmail,
  findByAffiliateCpf,
  updateAffiliateStatus,
  completeTestSuite
};

// Usage examples in comments:
/*

// Basic CRUD
const society = await createSociety();
const societies = await getAllSocieties();
const updated = await updateSociety(society._id, { name: "New Name" });

// CSV Import
const csvData = `
name,email,cpf
"Dr. João","joao@example.com","123.456.789-10"
"Dr. Maria","maria@example.com","987.654.321-00"
`;

await Society.importAffiliatesFromCSV("SBR", csvData);

// Search
const societies = await Society.findSocietiesByAffiliate("joao@example.com");

// Instance methods
const society = await Society.findByShortName("SBR");
await society.addAffiliate("Dr. New", "new@example.com", "111.222.333-44");
const stats = society.getAffiliatesStats();
const csvExport = society.exportAffiliatesToCSV();

*/
