import { InjectQueue } from '@nestjs/bullmq';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { Queue } from 'bullmq';
import { QUEUE_NAME } from 'src/constants';

@Injectable()
export class SeedQueue {
  constructor(@InjectQueue(QUEUE_NAME) private mailQueue: Queue) {}

  async SeedAdmin(password: string) {
    await this.mailQueue.add('seed_admin', password);
  }
}
