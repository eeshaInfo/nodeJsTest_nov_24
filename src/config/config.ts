import dotenv from 'dotenv';
dotenv.config();

export const config = {
  apiUrl: process.env.RANDOM_USER_API || 'https://randomuser.me/api/',
  dbUrl: process.env.DB_URL || 'mongodb://localhost:27017/userdb',
  requestsPerBatch: parseInt(process.env.REQUESTS_PER_BATCH || '300', 10),
  requestsPerSecond: parseInt(process.env.REQUESTS_PER_SECOND || '5', 10),
  batchSleepTime: parseInt(process.env.BATCH_SLEEP_TIME || '30000', 10),
  requestLimit: parseInt(process.env.REQUEST_LIMIT || '5000', 10),
  port: parseInt(process.env.PORT || '3000', 10),
};
