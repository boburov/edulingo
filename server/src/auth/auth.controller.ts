import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { RoleGuard } from 'src/guards/guards.guard';
import { AuthGuard } from 'src/guards/roles.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.create(createAuthDto);
  }

  @Get('google')
  @UseGuards()
  googleLogin() {
    // Google ga yo'naltiradi
  }

  @Get('dashboard')
  @UseGuards(AuthGuard, new RoleGuard('admin'))
  getDashboard() {
    return 'Admin paneli';
  }
}
