import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService, private mailService: MailService,) { }


  async generateToken(user: any) {
    const payload = { sub: user.id, email: user.email, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }


  async veriyf_token(token) {
    try {
      const payload = this.jwtService.verify(token);

      let user = await this.prisma.user.findUnique({ where: { email: payload.email } });
      if (!user) {
        throw new NotFoundException("User topilmadi")
      }

      if (!user.is_verified) {
        await this.prisma.user.update({
          where: { email: user.email },
          data: { is_verified: true },
        });
      }


      return this.generateToken(user);
    } catch (e) {
      throw new BadRequestException("Token noto‘g‘ri yoki muddati tugagan");
    }
  }

  async sendLoginLink(email: string) {
    console.log("📩 Email qabul qilindi:", email);
    const token = this.jwtService.sign({ email }, { expiresIn: '15m' });
    const link = `${process.env.FRONTEND_URL}/auth/verify-token?token=${token}`;

    await this.mailService.sendVerificationLink(email, link);
    return { message: 'Email yuborildi' };
  }

  async findAll() {
    return this.prisma.user.findMany({})
  }

}
