import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from '../prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';
import { GoogleStrategy } from './strategies/google.strategies';
import { MailModule } from 'src/mail/mail.module';

@Module({
  imports: [
    PrismaModule,
    MailModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'super_secret',
      signOptions: { expiresIn: '7d' },
    }),
    PassportModule.register({ session: false }),
  ],
  providers: [
    AuthService,
    GoogleStrategy,
  ],
  controllers: [AuthController],
  exports: [
    AuthService,
    JwtModule, 
  ],
})
export class AuthModule {}
