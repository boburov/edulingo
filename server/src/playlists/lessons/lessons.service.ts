import { HttpException, Injectable } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LessonsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(unique_name: string, data: CreateLessonDto) {
    const playlist = await this.prisma.playlist.findUnique({
      where: { unique_name: unique_name },
      include: {
        _count: {
          select: {
            lessons: true,
          },
        },
      },
    });
    if (!playlist) {
      throw new HttpException('Playlist not found', 404);
    }

    const newLesson = await this.prisma.lessons.create({
      data: {
        ...data,
        order: playlist._count.lessons + 1,
        playlist: {
          connect: {
            id: playlist.id,
          },
        },
      },
    });

    return newLesson;
  }

  findAll() {
    return `This action returns all lessons`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lesson`;
  }

  update(id: number, updateLessonDto: UpdateLessonDto) {
    return `This action updates a #${id} lesson`;
  }

  remove(id: number) {
    return `This action removes a #${id} lesson`;
  }
}
