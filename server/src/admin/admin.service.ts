import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcryptjs from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AdminService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {}

  async VerifyAdmin(password: string) {
    const admin = await this.prisma.admin.findFirst();
    if (!admin) {
      throw new HttpException('Admin is not seeded yet', 404);
    }
    const is_ok = bcryptjs.compareSync(password, admin.password);
    if (!is_ok) {
      throw new HttpException('Password is incorrect', 404);
    }
    const access_token = await this.jwt.sign({ access: true, role: 'admin' });
    return {
      access_token,
    };
  }
}
