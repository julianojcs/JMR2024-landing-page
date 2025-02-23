import mongoose from 'mongoose';

// Connection function
async function connectToDatabase() {
  try {
    if (!mongoose.connections[0].readyState) {

      const connectOptions = {
        dbName: process.env.MONGODB_DB || 'jornada',
        connectTimeoutMS: 10000,
        serverSelectionTimeoutMS: 10000,
        heartbeatFrequencyMS: 2000,
        retryWrites: true,
      };

      await mongoose.connect(process.env.MONGODB_URI, connectOptions);
      console.log('MongoDB connected successfully');
    }
    // Return the mongoose connection
    return mongoose.connection;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

export {
  connectToDatabase
};