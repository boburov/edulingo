import { Controller, Get, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AdminAccessGuard } from 'src/guards/admin-access/admin-access.guard';

@Controller('admin/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AdminAccessGuard)
  @Get('search')
  findAll() {
    return this.usersService.findAll();
  }
}
