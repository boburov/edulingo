import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { PlaylistsService } from './playlists.service';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';
import { AdminAccessGuard } from 'src/guards/admin-access/admin-access.guard';
import { multerOptions } from 'src/upload/multer.options';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('playlists')
export class PlaylistsController {
  constructor(private readonly playlistsService: PlaylistsService) {}

  @UseGuards(AdminAccessGuard)
  @UseInterceptors(FileInterceptor('thumbnail', multerOptions))
  @Post('new')
  create(
    @Body() data: CreatePlaylistDto,
    @UploadedFile() thumbnail: Express.Multer.File,
  ) {
    return this.playlistsService.create(data, thumbnail);
  }

  @Get()
  findAll() {
    return this.playlistsService.findAll();
  }

  @Get(':unique_name')
  findOne(@Param('unique_name') unique_name: string) {
    return this.playlistsService.findOne(unique_name);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePlaylistDto: UpdatePlaylistDto,
  ) {
    return this.playlistsService.update(+id, updatePlaylistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playlistsService.remove(+id);
  }
}
