import { HttpException, Injectable } from '@nestjs/common';
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

  async findAll() {
    return await this.prisma.playlist.findMany();
  }

  async findOne(id: string) {
    const the_playlist = await this.prisma.playlist.findUnique({
      where: { id: id },
    });
    if (the_playlist) {
      throw new HttpException('playlist not found', 404);
    }
    return the_playlist;
  }

  update(id: number, updatePlaylistDto: UpdatePlaylistDto) {
    return `This action updates a #${id} playlist`;
  }

  remove(id: number) {
    return `This action removes a #${id} playlist`;
  }
}
