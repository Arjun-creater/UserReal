import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js'; 
import process from 'process';
import config from './config/config.js';
const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());


app.use('/api/users', userRoutes);

const PORT = config.port;
app.listen(PORT, () => {
  console.log(`Server running in ${config.nodeEnv} mode on port ${PORT}`);
});