import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { RoleGuard } from 'src/guards/guards.guard';
import { GoogleAuthGuard } from 'src/guards/google-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post()
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.create(createAuthDto);
  }

  @Get("users")
  @UseGuards(RoleGuard)
  async getAllUser() {
    return this.authService.findAll()
  }

  @Get('google/callback')
  @UseGuards(GoogleAuthGuard)
  googleCallback(@Req() req) {
    return {
      message: 'Google login successful',
      user: req.user,
    };
  }


  @Get('dashboard')
  @UseGuards()
  getDashboard() {
    return 'Admin paneli';
  }

}
