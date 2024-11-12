import mongoose from 'mongoose';
import { config } from '../config/config';

export const connectDB = async () => {
  try {
    await mongoose.connect(config.dbUrl);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};