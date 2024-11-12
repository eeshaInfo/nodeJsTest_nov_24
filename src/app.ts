import express from 'express';
import userRoutes from './routes/userRoutes';
import { connectDB } from './utils/db';

const app = express();
app.use(express.json());
app.use('/api', userRoutes);

connectDB();

export default app;
