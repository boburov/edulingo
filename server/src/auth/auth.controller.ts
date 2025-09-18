import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private config: ConfigService,
  ) {}

  @Post('register')
  async register(@Req() req) {
    return this.authService.register(req.body);
  }

  @Post('login')
  async login(@Req() req) {
    return this.authService.login(req.body);
  }

  @Get('verify')
  async verify(@Query('token') token: string) {
    return this.authService.verify(token);
  }

  @Get('profile')
  async profile(@Req() req) {
    return req.user;
  }

  @Post('refresh')
  async refresh(@Body('refresh') refresh: string) {
    return this.authService.refresh(refresh);
  }

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleRedirect(@Req() req, @Res() res) {
    const tokens = await this.authService.generateTokens(req.user);
    res.redirect(
      `${this.config.get('FRONTEND_URL')}/verify?token=${tokens.access}&refresh=${tokens.refresh}`,
    );
  }
}
