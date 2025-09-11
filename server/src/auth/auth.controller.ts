import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Req,
  BadRequestException,
  Query,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('users')
  async getAllUser() {
    return this.authService.findAll();
  }

  @Get('verify-token')
  async verifyToken(@Query('token') token: string) {
    return this.authService.veriyf_token(token);
  }

  @Post('send-msg')
  async sendLogin(@Body('email') email: string) {
    if (!email) throw new BadRequestException('Email required');
    return this.authService.sendLoginLink(email);
  }

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req) {
    console.log('📌 Callback req.user:', req.user);
    return this.authService.generateToken(req.user);
  }

  @Get('dashboard')
  @UseGuards()
  getDashboard() {
    return 'Admin paneli';
  }
}
