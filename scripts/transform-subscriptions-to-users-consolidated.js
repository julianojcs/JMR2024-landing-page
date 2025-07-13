/**
 * SCRIPT DE TRANSFORMAÇÃO DE INSCRIÇÕES PARA USUÁRIOS
 * ===================================================
 *
 * Este script transforma dados de inscrições (subscriptions) em registros de usuários
 * compatíveis com o schema do modelo User.js.
 *
 * FUNCIONALIDADES:
 * - Consolida múltiplas inscrições do mesmo CPF em um único usuário
 * - Cada inscrição vira um item no array congresspersonData
 * - Combina dados de múltiplas inscrições (pega o valor mais completo)
 * - Gera estatísticas detalhadas da consolidação
 *
 * USO:
 * node transform-subscriptions-to-users-consolidated.js
 *
 * ENTRADA: docs/json/jornada.subscriptions.json
 * SAÍDA: docs/json/jornada.users.json
 *
 * AUTOR: GitHub Copilot
 * DATA: Julho 2025
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the subscription data
const subscriptionsPath = path.join(__dirname, '../docs/json/jornada.subscriptions.json');
const outputPath = path.join(__dirname, '../docs/json/jornada.users.json');

console.log('Reading subscription data...');
const subscriptions = JSON.parse(fs.readFileSync(subscriptionsPath, 'utf8'));

console.log(`Processing ${subscriptions.length} subscriptions...`);

// Helper function to safely get nested property
function safeGet(obj, path, defaultValue = null) {
  const keys = path.split('.');
  let current = obj;

  for (let key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      return defaultValue;
    }
  }

  return current;
}

// Determine activity type based on selected items
function getActivityType(selectedItems) {
  if (selectedItems.journey) {
    return "CONGRESS";
  } else if (selectedItems.workshops && selectedItems.workshops.length > 0) {
    return "WORKSHOP";
  } else if (selectedItems.courses && selectedItems.courses.length > 0) {
    return "COURSE";
  } else if (selectedItems.dayUse) {
    return "DAYUSE";
  }
  return "CONGRESS"; // Default fallback
}

// Get activity name based on selected items
function getActivityName(selectedItems) {
  if (selectedItems.journey) {
    return selectedItems.journey.title;
  } else if (selectedItems.workshops && selectedItems.workshops.length > 0) {
    return selectedItems.workshops[0].title || "Workshop";
  } else if (selectedItems.courses && selectedItems.courses.length > 0) {
    return selectedItems.courses[0].title || "Course";
  } else if (selectedItems.dayUse) {
    return selectedItems.dayUse.title || "Day Use";
  }
  return "JMR & CIM 2025"; // Default fallback
}

// Get attendedAt timestamp based on selected items
function getAttendedAt(selectedItems) {
  if (selectedItems.journey && selectedItems.journey.attendedAt) {
    return selectedItems.journey.attendedAt;
  } else if (selectedItems.workshops && selectedItems.workshops.length > 0 && selectedItems.workshops[0].attendedAt) {
    return selectedItems.workshops[0].attendedAt;
  } else if (selectedItems.courses && selectedItems.courses.length > 0 && selectedItems.courses[0].attendedAt) {
    return selectedItems.courses[0].attendedAt;
  } else if (selectedItems.dayUse && selectedItems.dayUse.attendedAt) {
    return selectedItems.dayUse.attendedAt;
  }
  return null; // No attendance recorded
}

// Get payment status from subscription
function getPaymentStatus(subscription) {
  // Priority: asaasData.status > status.payment > paymentStatus
  let status = safeGet(subscription, 'asaasData.status') ||
               safeGet(subscription, 'status.payment') ||
               safeGet(subscription, 'paymentStatus') ||
               null;

  // Normalize RECEIVED to CONFIRMED as per requirement
  if (status === 'RECEIVED') {
    status = 'CONFIRMED';
  }

  return status;
}

// Clean and format CPF (remove non-numeric characters)
function cleanCpf(cpf) {
  if (!cpf) return null;
  return cpf.replace(/\D/g, '');
}

// Clean and format phone (remove non-numeric characters except parentheses and dashes)
function cleanPhone(phone) {
  if (!phone) return null;
  return phone.trim();
}

// Clean and format CRM (remove non-numeric characters)
function cleanCrm(crm) {
  if (!crm) return null;
  return crm.replace(/\D/g, '');
}

// Clean and format CEP (remove non-numeric characters)
function cleanCep(cep) {
  if (!cep) return null;
  return cep.replace(/\D/g, '');
}

// Get the most complete data from multiple subscriptions (prioritize non-null values)
function getMostCompleteValue(values) {
  // Filter out null, undefined, and empty string values
  const validValues = values.filter(val => val !== null && val !== undefined && val !== '');

  if (validValues.length === 0) return null;
  if (validValues.length === 1) return validValues[0];

  // If multiple valid values, return the first non-null one
  return validValues[0];
}

// Transform and consolidate subscriptions by CPF
function consolidateSubscriptionsByUser(subscriptions) {
  const userMap = new Map();

  subscriptions.forEach((subscription, index) => {
    if (index % 1000 === 0) {
      console.log(`Processing subscription ${index + 1} of ${subscriptions.length}...`);
    }

    try {
      const cpf = cleanCpf(safeGet(subscription, 'personalInfo.cpf'));
      const email = safeGet(subscription, 'personalInfo.email');

      // Use CPF as primary key, email as fallback
      const userKey = cpf || email;

      if (!userKey) {
        console.warn(`Skipping subscription ${subscription.subscriptionId} - no CPF or email found`);
        return;
      }

      // Create congressperson data for this subscription
      const congresspersonEntry = {
        event: '6844b06292642fb12c3667b5',
        activity: getActivityType(subscription.selectedItems || {}),
        activityName: getActivityName(subscription.selectedItems || {}),
        attendedAt: getAttendedAt(subscription.selectedItems || {}),
        paymentStatus: getPaymentStatus(subscription)
      };

      if (userMap.has(userKey)) {
        // User already exists, add this subscription's congressperson data
        const existingUser = userMap.get(userKey);

        // Add the new congressperson activity (avoid duplicates)
        const isDuplicate = existingUser.congresspersonData.some(cp =>
          cp.activity === congresspersonEntry.activity &&
          cp.activityName === congresspersonEntry.activityName
        );

        if (!isDuplicate) {
          existingUser.congresspersonData.push(congresspersonEntry);
        }

        // Update user data with most complete information
        existingUser.asaasCustomerId = getMostCompleteValue([
          existingUser.asaasCustomerId,
          safeGet(subscription, 'asaasData.customer')
        ]);

        existingUser.name = getMostCompleteValue([
          existingUser.name,
          safeGet(subscription, 'personalInfo.fullName')
        ]);

        existingUser.phone = getMostCompleteValue([
          existingUser.phone,
          cleanPhone(safeGet(subscription, 'personalInfo.phone'))
        ]);

        existingUser.crm = getMostCompleteValue([
          existingUser.crm,
          cleanCrm(safeGet(subscription, 'personalInfo.crm'))
        ]);

        existingUser.stateCrm = getMostCompleteValue([
          existingUser.stateCrm,
          safeGet(subscription, 'personalInfo.stateCrm')
        ]);

        existingUser.address = getMostCompleteValue([
          existingUser.address,
          safeGet(subscription, 'personalInfo.address.address')
        ]);

        existingUser.addressNumber = getMostCompleteValue([
          existingUser.addressNumber,
          safeGet(subscription, 'personalInfo.address.number')
        ]);

        existingUser.complement = getMostCompleteValue([
          existingUser.complement,
          safeGet(subscription, 'personalInfo.address.complement')
        ]);

        existingUser.province = getMostCompleteValue([
          existingUser.province,
          safeGet(subscription, 'personalInfo.address.neighborhood')
        ]);

        existingUser.city = getMostCompleteValue([
          existingUser.city,
          safeGet(subscription, 'personalInfo.address.city')
        ]);

        existingUser.state = getMostCompleteValue([
          existingUser.state,
          safeGet(subscription, 'personalInfo.address.state')
        ]);

        existingUser.cep = getMostCompleteValue([
          existingUser.cep,
          cleanCep(safeGet(subscription, 'personalInfo.address.zipCode'))
        ]);

        // Update timestamps to the most recent
        const newCreatedAt = safeGet(subscription, 'metadata.createdAt');
        const newUpdatedAt = safeGet(subscription, 'metadata.updatedAt');

        if (newCreatedAt && (!existingUser.createdAt || new Date(newCreatedAt) < new Date(existingUser.createdAt))) {
          existingUser.createdAt = newCreatedAt;
        }

        if (newUpdatedAt && (!existingUser.updatedAt || new Date(newUpdatedAt) > new Date(existingUser.updatedAt))) {
          existingUser.updatedAt = newUpdatedAt;
        }

      } else {
        // Create new user
        const user = {
          asaasCustomerId: safeGet(subscription, 'asaasData.customer'),
          name: safeGet(subscription, 'personalInfo.fullName'),
          email: safeGet(subscription, 'personalInfo.email'),
          emailVerified: null,
          password: null,
          image: 'https://res.cloudinary.com/dixe3b2i5/image/upload/v1742929226/speakers/default-avatar.png',
          cpf: cpf,
          phone: cleanPhone(safeGet(subscription, 'personalInfo.phone')),
          crm: cleanCrm(safeGet(subscription, 'personalInfo.crm')),
          stateCrm: safeGet(subscription, 'personalInfo.stateCrm', 'MG'),
          specialization: null,
          rqe: null,
          address: safeGet(subscription, 'personalInfo.address.address'),
          addressNumber: safeGet(subscription, 'personalInfo.address.number'),
          complement: safeGet(subscription, 'personalInfo.address.complement'),
          province: safeGet(subscription, 'personalInfo.address.neighborhood'),
          city: safeGet(subscription, 'personalInfo.address.city'),
          state: safeGet(subscription, 'personalInfo.address.state'),
          country: 'Brasil',
          cep: cleanCep(safeGet(subscription, 'personalInfo.address.zipCode')),
          termsOfUse: true,
          membership: [],
          role: 'user',
          roles: ['CONGRESSPERSON'],
          professionalData: [],
          paperPresentationData: [],
          congresspersonData: [congresspersonEntry],
          isActive: true,
          createdAt: safeGet(subscription, 'metadata.createdAt') || new Date().toISOString(),
          updatedAt: safeGet(subscription, 'metadata.updatedAt') || new Date().toISOString()
        };

        userMap.set(userKey, user);
      }

    } catch (error) {
      console.error(`Error processing subscription ${index + 1}:`, error);
      console.error('Subscription data:', JSON.stringify(subscription, null, 2));
    }
  });

  return Array.from(userMap.values());
}

// Transform all subscriptions with consolidation
const users = consolidateSubscriptionsByUser(subscriptions);

console.log(`Successfully consolidated ${subscriptions.length} subscriptions into ${users.length} unique users.`);

// Write the output
console.log(`Writing to ${outputPath}...`);
fs.writeFileSync(outputPath, JSON.stringify(users, null, 2));

console.log('Transformation complete!');
console.log(`Output file: ${outputPath}`);
console.log(`Total unique users generated: ${users.length}`);

// Show detailed statistics
const stats = {
  totalUsers: users.length,
  totalSubscriptions: subscriptions.length,
  consolidationRatio: (subscriptions.length / users.length).toFixed(2),
  withCpf: users.filter(u => u.cpf).length,
  withPhone: users.filter(u => u.phone).length,
  withCrm: users.filter(u => u.crm).length,
  withAddress: users.filter(u => u.address).length,
  multipleActivities: users.filter(u => u.congresspersonData.length > 1).length,
  byActivity: {},
  activitiesDistribution: {},
  paymentStatusDistribution: {},
  attendanceStats: { withAttendance: 0, withoutAttendance: 0 }
};

// Count activities and payment status
users.forEach(user => {
  user.congresspersonData.forEach(cp => {
    const activity = cp.activity;
    stats.byActivity[activity] = (stats.byActivity[activity] || 0) + 1;

    // Count payment status
    const paymentStatus = cp.paymentStatus || 'UNKNOWN';
    stats.paymentStatusDistribution[paymentStatus] = (stats.paymentStatusDistribution[paymentStatus] || 0) + 1;

    // Count attendance
    if (cp.attendedAt) {
      stats.attendanceStats.withAttendance++;
    } else {
      stats.attendanceStats.withoutAttendance++;
    }
  });

  const activityCount = user.congresspersonData.length;
  stats.activitiesDistribution[activityCount] = (stats.activitiesDistribution[activityCount] || 0) + 1;
});

console.log('\n=== CONSOLIDATION STATISTICS ===');
console.log(`Original subscriptions: ${stats.totalSubscriptions}`);
console.log(`Unique users created: ${stats.totalUsers}`);
console.log(`Consolidation ratio: ${stats.consolidationRatio} subscriptions per user`);
console.log(`Users with multiple activities: ${stats.multipleActivities}`);

console.log('\n=== DATA COMPLETENESS ===');
console.log(`- With CPF: ${stats.withCpf} (${(stats.withCpf/stats.totalUsers*100).toFixed(1)}%)`);
console.log(`- With phone: ${stats.withPhone} (${(stats.withPhone/stats.totalUsers*100).toFixed(1)}%)`);
console.log(`- With CRM: ${stats.withCrm} (${(stats.withCrm/stats.totalUsers*100).toFixed(1)}%)`);
console.log(`- With address: ${stats.withAddress} (${(stats.withAddress/stats.totalUsers*100).toFixed(1)}%)`);

console.log('\n=== ACTIVITY DISTRIBUTION ===');
Object.entries(stats.byActivity).forEach(([activity, count]) => {
  console.log(`- ${activity}: ${count} activities`);
});

console.log('\n=== ACTIVITIES PER USER ===');
Object.entries(stats.activitiesDistribution).forEach(([count, users]) => {
  console.log(`- ${count} activity(ies): ${users} users`);
});

console.log('\n=== PAYMENT STATUS DISTRIBUTION ===');
Object.entries(stats.paymentStatusDistribution).forEach(([status, count]) => {
  const percentage = ((count / (stats.totalSubscriptions)) * 100).toFixed(1);
  console.log(`- ${status}: ${count} activities (${percentage}%)`);
});

console.log('\n=== ATTENDANCE STATISTICS ===');
console.log(`- With attendance: ${stats.attendanceStats.withAttendance} activities`);
console.log(`- Without attendance: ${stats.attendanceStats.withoutAttendance} activities`);
console.log(`- Attendance rate: ${((stats.attendanceStats.withAttendance / (stats.attendanceStats.withAttendance + stats.attendanceStats.withoutAttendance)) * 100).toFixed(1)}%`);

// Show examples of consolidated users
const multiActivityUsers = users.filter(u => u.congresspersonData.length > 1);
if (multiActivityUsers.length > 0) {
  console.log('\n=== EXAMPLES OF CONSOLIDATED USERS ===');
  multiActivityUsers.slice(0, 3).forEach((user, index) => {
    console.log(`Example ${index + 1}: ${user.name} (CPF: ${user.cpf})`);
    console.log(`  Activities: ${user.congresspersonData.map(cp => cp.activity).join(', ')}`);
    console.log(`  Payment Status: ${user.congresspersonData.map(cp => cp.paymentStatus).join(', ')}`);
    console.log(`  Attendance: ${user.congresspersonData.map(cp => cp.attendedAt ? '✓' : '✗').join(', ')}`);
  });
}
