import { Worker, Queue } from 'bullmq';

const connection = { host: '127.0.0.1', port: 6379 };

export const emailQueue = new Queue('email', { connection });

export const emailWorker = new Worker(
  'email',
  async job => {
    
  },
  { connection }
);
