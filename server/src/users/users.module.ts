import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UploadModule } from 'src/upload/upload.module';
import { HistoryModule } from './history/history.module';

@Module({
  imports: [PrismaModule, UploadModule, HistoryModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
