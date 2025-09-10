import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from '../prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';
import { GoogleStrategy } from './google.strategy';  // ✅ strategy import qiling

@Module({
  imports: [
    PrismaModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
    PassportModule.register({ session: false }),
  ],
  providers: [
    AuthService,
    GoogleStrategy,   // ✅ strategy provider sifatida qo‘shildi
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
