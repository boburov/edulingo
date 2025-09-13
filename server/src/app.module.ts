import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { MailModule } from './mail/mail.module';
import { UploadModule } from './upload/upload.module';
import { AdminModule } from './admin/admin.module';
import { JobsModule } from './jobs/jobs.module';
import { PlaylistsModule } from './playlists/playlists.module';
import { GlobalModule } from './global/global.module';

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    MailModule,
    UploadModule,
    AdminModule,
    JobsModule,
    PlaylistsModule,
    GlobalModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
