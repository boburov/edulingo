import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateAuthDto } from './dto/create-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {
    return 'Goolge Auth';
  }

  @Post('signup')
  async regsiter_user(@Body() dto: CreateAuthDto) {
    return await this.authService.register(dto);
  }

  @Post('signin')
  async login(@Body() email: string) {
    return this.authService.login(email);
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req) {
    const jwt = await this.authService.generateJwt(req.user);
    return { token: jwt, user: req.user };
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
