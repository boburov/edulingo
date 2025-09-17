import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import type { Response } from 'express';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateAuthDto } from './dto/create-auth.dto';
import { ConfigService } from '@nestjs/config';
import { JwtAuthGuard } from './strategies/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private config: ConfigService,
  ) {}

  @Post('signup')
  async signup(@Body() dto: CreateAuthDto) {
    return this.authService.register(dto);
  }

  @Post('signin')
  async signin(@Body('email') email: string) {
    return this.authService.login(email);
  }

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {
    return 'Redirecting to Google...';
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  async getProfile(@Req() req) {
    return req.user;
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req, @Res() res: Response) {
    const jwt = await this.authService.generateJwt(req.user);
    const frontendUrl =
      this.config.get('FRONTEND_URL') || 'http://localhost:3000';

    return res.redirect(`${frontendUrl}/auth/callback?token=${jwt}`);
  }

  @Get('verify-token')
  async verifyToken(@Query('token') token: string) {
    if (!token) throw new BadRequestException('Token topilmadi');
    const user = await this.authService.verifyJwt(token);
    if (!user)
      throw new BadRequestException('Token noto‘g‘ri yoki muddati o‘tgan');
    return { success: true, user };
  }
}
