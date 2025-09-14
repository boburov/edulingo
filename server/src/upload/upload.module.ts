import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { GlobalModule } from 'src/global/global.module';

@Module({
  imports: [GlobalModule],
  providers: [UploadService],
  exports: [UploadService],
})
export class UploadModule {}
