import { S3Client } from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NameSanitizerService } from 'src/global/name_sanitizer/name_sanitizer.service';

@Injectable()
export class UploadService {
  private s3: S3Client;
  private bucket_name: string;

  constructor(
    private configService: ConfigService,
    private readonly sanitizer: NameSanitizerService,
  ) {
    this.s3 = new S3Client({
      region: this.configService.get<string>('AWS_S3_REGION', ''),
      credentials: {
        accessKeyId: this.configService.get<string>('AWS_S3_ACCESS_KEY', ''),
        secretAccessKey: this.configService.get<string>(
          'AWS_S3_SECRET_KEY',
          '',
        ),
      },
    });
    this.bucket_name = this.configService.get<string>('AWS_S3_BUCKET_NAME', '');
  }
}
