import { Module } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { LessonsController } from './lessons.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PrismaModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'super_secret',
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [LessonsController],
  providers: [LessonsService],
})
export class LessonsModule {}
