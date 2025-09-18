import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { GoogleStrategy } from './google.strartegy';
import { MailModule } from 'src/mail/mail.module';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    MailModule,
    PrismaModule,
    PassportModule.register({ defaultStrategy: 'jwt' }), // optional
    JwtModule.register({ secret: 'secretKey' }),
  ],
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy, JwtStrategy],
})
export class AuthModule {}
