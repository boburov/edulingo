import { HttpException, Injectable } from '@nestjs/common';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { GenerateUniquenameService } from 'src/global/generate_uniquename/generate_uniquename.service';
import { UploadService } from 'src/upload/upload.service';

@Injectable()
export class PlaylistsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly unique_name: GenerateUniquenameService,
    private readonly upload: UploadService,
  ) {}

  async create(data: CreatePlaylistDto) {
    const unique_name = await this.unique_name.generate(data.title);
    const { thumbnail, ...FormData } = data;
    const UploadedThumbnail = await this.upload.image(thumbnail, {
      q: 80,
      h: 1280,
      w: 720,
    });
    const newPlaylist = await this.prisma.playlist.create({
      data: {
        ...FormData,
        thumbnail: UploadedThumbnail,
        unique_name: unique_name,
      },
    });
    return newPlaylist;
  }

  async findAll() {
    return await this.prisma.playlist.findMany();
  }

  async findOne(unique_name: string) {
    const the_playlist = await this.prisma.playlist.findUnique({
      where: { unique_name: unique_name },
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
