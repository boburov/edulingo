import { Module } from '@nestjs/common';
import { GenerateUniquenameService } from './generate_uniquename/generate_uniquename.service';

@Module({
  providers: [GenerateUniquenameService],
  exports: [GenerateUniquenameService]
})
export class GlobalModule {}
