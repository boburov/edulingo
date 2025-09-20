import { Module } from '@nestjs/common';
import { VocsService } from './vocs.service';
import { VocsController } from './vocs.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [VocsController],
  providers: [VocsService],
})
export class VocsModule {}
