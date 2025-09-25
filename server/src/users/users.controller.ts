import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ShowedDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('all')
  getAll() {
    return this.usersService.getAll();
  }

  @Put('update/pfpf/:id')
  @UseInterceptors(FileInterceptor('profile_pic'))
  updatePfpf(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.usersService.updatePFP(id, file);
  }

  @Put('showed/:userId')
  showed(@Param('userId') userId: string, @Body() body: ShowedDto) {
    return this.usersService.showed(userId, body.courseId, body.lessonId);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }
}
