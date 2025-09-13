import { Module } from '@nestjs/common';
import { GenerateUniquenameService } from './generate_uniquename/generate_uniquename.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [GenerateUniquenameService],
  exports: [GenerateUniquenameService],
})
export class GlobalModule {}
