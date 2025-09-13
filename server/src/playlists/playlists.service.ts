import { Injectable } from '@nestjs/common';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { GenerateUniquenameService } from 'src/global/generate_uniquename/generate_uniquename.service';

@Injectable()
export class PlaylistsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly unique_name: GenerateUniquenameService,
  ) {}

  async create(data: CreatePlaylistDto) {
    const unique_name = await this.unique_name.generate(data.title);
    const newPlaylist = await this.prisma.playlist.create({
      data: {
        ...data,
        unique_name: unique_name,
      },
    });
    return newPlaylist;
  }

  findAll() {
    return `This action returns all playlists`;
  }

  findOne(id: number) {
    return `This action returns a #${id} playlist`;
  }

  update(id: number, updatePlaylistDto: UpdatePlaylistDto) {
    return `This action updates a #${id} playlist`;
  }

  remove(id: number) {
    return `This action removes a #${id} playlist`;
  }
}
