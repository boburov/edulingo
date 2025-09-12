import { Injectable, OnModuleInit } from '@nestjs/common';
import { SeedQueue } from './jobs/processors/admin_seed/seed.queue';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(private readonly seedQueue: SeedQueue) {}
  onModuleInit() {
    const password: string = String(process.env.DEFAULT_ADMIN_PASSWORD);
    this.seedQueue.SeedAdmin(password);
  }

  getHello(): string {
    return 'Buving AMi';
  }
}
