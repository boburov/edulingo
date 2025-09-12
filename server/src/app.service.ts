import { Injectable, OnModuleInit } from '@nestjs/common';
import { SeedQueue } from './jobs/processors/admin_seed/seed.queue';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(private readonly seedQueue: SeedQueue) {}

  async onModuleInit() {
    console.log('getting admin password');

    const password: string = String(process.env.DEFAULT_ADMIN_PASSWORD);
    await this.seedQueue.SeedAdmin(password);
  }

  getHello(): string {
    return 'Hello World!';
  }
}
