import { HttpException, Injectable } from '@nestjs/common';
import { CreateVocDto } from './dto/create-voc.dto';
import { UpdateVocDto } from './dto/update-voc.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VocsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(lesson_id: string, data: CreateVocDto) {
    const new_lesson = await this.prisma.vocabulary.create({
      data: {
        ...data,
        lessons: {
          connect: {
            id: lesson_id,
          },
        },
      },
    });

    if (!new_lesson) {
      throw new HttpException(
        'something went wrong, please try again later',
        404,
      );
    }

    return new_lesson;
  }

  async findAll(lesson_id: string) {
    const vocs = await this.prisma.vocabulary.findMany({
      where: { lessonsId: lesson_id },
    });
    return vocs;
  }

  async update(lesson_id: string, id: string, data: UpdateVocDto) {
    const updating = await this.prisma.vocabulary.update({
      where: { id: id, lessonsId: lesson_id },
      data,
    });

    if (!updating) {
      throw new HttpException(
        'something went wrong, please try again later',
        404,
      );
    }

    return updating;
  }

  async remove(lesson_id: string, id: string) {
    await this.prisma.vocabulary.delete({
      where: { id: id, lessonsId: lesson_id },
    });
    return {
      deleted: true,
    };
  }
}
