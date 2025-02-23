import mongoose from 'mongoose';

// Connection function
async function connectToDatabase() {
  try {
    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(process.env.MONGODB_URI, {
        dbName: process.env.MONGODB_DB || 'jornada'
      });
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