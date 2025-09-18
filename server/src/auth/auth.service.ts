import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { MailService } from 'src/mail/mail.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private config: ConfigService,
    private jwt: JwtService,
    private mailService: MailService,
  ) {}

  async generateTokens(user: any) {
    const payload = {
      userId: user.id,
      email: user.email,
      name: user.name,
      surname: user.surname,
      profile_pic: user.profile_pic,
    };

    const access = this.jwt.sign(payload, {
      expiresIn: '15m',
      secret: this.config.getOrThrow('JWT_SECRET'),
    });

    const refresh = this.jwt.sign(
      { userId: user.id },
      {
        expiresIn: '7d',
        secret: this.config.getOrThrow('JWT_SECRET'),
      },
    );

    return { access, refresh };
  }

  async validateGoogleUser(userData: {
    google_id: string;
    email: string;
    name: string;
    surname: string;
    picture: string;
  }) {
    let user = await this.prisma.user.findUnique({
      where: { google_id: userData.google_id },
    });

    if (user) {
      user = await this.prisma.user.update({
        where: { google_id: userData.google_id },
        data: {
          email: userData.email,
          name: userData.name,
          surname: userData.surname,
          profile_pic: userData.picture,
        },
      });
    } else {
      user = await this.prisma.user.create({
        data: {
          google_id: userData.google_id,
          email: userData.email,
          name: userData.name,
          surname: userData.surname,
          profile_pic: userData.picture,
          is_verified: true,
        },
      });
    }

    const token = this.jwt.sign(
      {
        userId: user.id,
        email: user.email,
        name: user.name,
        surname: user.surname,
        profile_pic: user.profile_pic,
      },
      { expiresIn: '15m' },
    );
    const magic_link = `${this.config.getOrThrow('VERIFY_EMAIL_URL')}${token}`;

    await this.mailService.sendVerificationLink(user.email, magic_link);

    return user;
  }

  async refresh(token: string) {
    try {
      const decoded = this.jwt.verify(token, {
        secret: this.config.getOrThrow('JWT_SECRET'),
      });

      const user = await this.prisma.user.findUnique({
        where: { id: decoded.userId },
      });
      if (!user) throw new HttpException('User topilmadi', 404);

      return this.generateTokens(user);
    } catch {
      throw new HttpException(
        'Refresh token noto‘g‘ri yoki muddati tugagan',
        401,
      );
    }
  }

  async register(dto: CreateAuthDto) {
    const { name, email, surname } = dto;

    const exist = await this.prisma.user.findUnique({ where: { email } });
    if (exist) throw new HttpException('Bu user mavjud', 409);

    await this.prisma.user.create({
      data: { name, surname, email },
    });

    const verifyToken = this.jwt.sign(
      { email },
      {
        expiresIn: '15m',
        secret: this.config.getOrThrow('JWT_SECRET'),
      },
    );

    const magicLink = `${this.config.getOrThrow('VERIFY_EMAIL_URL')}?token=${verifyToken}`;
    await this.mailService.sendVerificationLink(email, magicLink);

    return { message: 'Emailingizga tasdiqlash linki yuborildi' };
  }

  async login(dto: CreateAuthDto) {
    const { email } = dto;

    const user = await this.prisma.user.findFirst({ where: { email } });

    if (!user) {
      throw new HttpException('Bunday user mavjud emas', 404);
    }

    const payload = { email };

    const token = this.jwt.sign(
      {
        userId: user.id,
        email: user.email,
        name: user.name,
        surname: user.surname,
        profile_pic: user.profile_pic,
      },
      { expiresIn: '15m' },
    );
    const magic_link = `${this.config.getOrThrow('VERIFY_EMAIL_URL')}${token}`;

    await this.mailService.sendVerificationLink(email, magic_link);

    return {
      access_token: token,
      user: user,
    };
  }

  async verify(token: string) {
    try {
      const decoded: any = this.jwt.verify(token, {
        secret: this.config.getOrThrow('JWT_SECRET'),
      });

      const user = await this.prisma.user.update({
        where: { email: decoded.email },
        data: { is_verified: true },
      });

      // Foydalanuvchiga access va refresh qaytar
      const tokens = await this.generateTokens(user);

      return {
        message: 'User tasdiqlandi',
        user,
        ...tokens,
      };
    } catch {
      throw new HttpException('Invalid or expired token', 400);
    }
  }
}
