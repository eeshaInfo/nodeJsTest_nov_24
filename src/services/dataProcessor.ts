import axios from 'axios';
import UserModel, { IItems } from '../models/UserModel';
import { config } from '../config/config';

async function fetchBatchData(batchSize: number): Promise<IItems[]> {
  const users: IItems[] = [];
  for (let i = 0; i < batchSize; i++) {
    const response = await axios.get(config.apiUrl, {
      params: { results: config.requestsPerBatch },
    });
    users.push(...response.data.results);

    if (i % config.requestsPerSecond === 0 && i !== 0) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  return users;
}

async function saveData(users: IItems[]) {
  await UserModel.insertMany(users);
}

export async function processInBatches() {
  for (let i = 0; i < Math.ceil(config.requestLimit / config.requestsPerBatch); i++) {
    const batchData = await fetchBatchData(config.requestsPerBatch);
    await saveData(batchData);
    console.log(`Batch ${i + 1} processed.`);
    await new Promise(resolve => setTimeout(resolve, config.batchSleepTime));
  }
}
