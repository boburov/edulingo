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

  findOne(id: number) {
    return `This action returns a #${id} lesson`;
  }

  async update(unique_name: string, id: string, data: UpdateLessonDto) {
    const updating = await this.prisma.lessons.update({
      where: { id: id, playlist: { unique_name: unique_name } },
      data,
    });
    return updating;
  }

  async remove(unique_name: string, id: string) {
    const lesson = await this.prisma.lessons.findUnique({
      where: { id: id, playlist: { unique_name: unique_name } },
      include: {
        playlist: {
          include: {
            lessons: true,
          },
        },
      },
    });

    if (!lesson) throw new HttpException('Lesson not defined', 404);

    await this.prisma.lessons.delete({ where: { id: lesson.id } });

    if (!lesson.playlist)
      throw new HttpException('Lessons are not defined', 404);

    const lessons = lesson.playlist.lessons.filter((l) => l.id !== lesson.id);

    const updates =
      lessons.map((l, i) => {
        return this.prisma.lessons.update({
          where: { id: l.id },
          data: { order: i + 1 },
        });
      }) ?? [];

    await this.prisma.$transaction(updates);

    return {
      deleted: true,
    };
  }
}
