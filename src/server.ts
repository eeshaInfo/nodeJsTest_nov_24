import app from './app';
import { config } from './config/config';
import { processInBatches } from './services/dataProcessor';

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
  processInBatches();
});