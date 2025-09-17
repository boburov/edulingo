import {
  BadRequestException,
  HttpException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { CreateAuthDto } from './dto/create-auth.dto';
import { MailService } from 'src/mail/mail.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private mailService: MailService,
    private config: ConfigService,
  ) {}

  async register(dto: CreateAuthDto) {
    const { email, name, surname } = dto;

    let user = await this.prisma.user.findFirst({ where: { email } });

    if (user) {
      throw new HttpException('This email already used', 403);
    }

    user = await this.prisma.user.create({
      data: {
        name,
        surname,
        email,
        google_id: '',
      },
    });

    const token = await this.generateJwt(user);

    const link = `${this.config.getOrThrow('FRONTEND_URL')}/auth/verify-token?token=${token}`;

    this.mailService.sendVerificationLink(email, link);
    return {
      message: 'accaount created',
      access_token: token,
      user: user,
    };
  }

  async login(email: string) {
    const user = await this.prisma.user.findFirst({ where: { email } });

    if (!user) {
      throw new HttpException('User not Found', 404);
    } else {
      const token = this.generateJwt(user);

      return {
        message: 'login succesfull',
        access_token: token,
        user,
      };
    }
  }

  async generateJwt(user) {
    const payload = { sub: user.id, email: user.email };
    return this.jwtService.signAsync(payload, { expiresIn: '7d' });
  }
  async verifyJwt(token: string) {
    try {
      const payload: any = this.jwtService.verify(token, {
        secret: process.env.JWT_SECRET,
      });
      const user = await this.prisma.user.findUnique({
        where: { email: payload.email },
      });
      if (user) {
        await this.prisma.user.update({
          where: { id: user.id },
          data: { is_verified: true },
        });
      }
      return user;
    } catch (err) {
      return null; // token invalid yoki expired
    }
  }
}
