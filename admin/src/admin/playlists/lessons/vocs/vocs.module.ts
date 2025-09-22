import { Module } from '@nestjs/common';
import { VocsService } from './vocs.service';
import { VocsController } from './vocs.controller';

@Module({
  controllers: [VocsController],
  providers: [VocsService],
})
export class VocsModule {}
