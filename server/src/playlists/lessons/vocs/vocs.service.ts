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

  findAll() {
    return `This action returns all vocs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} voc`;
  }

  update(id: number, updateVocDto: UpdateVocDto) {
    return `This action updates a #${id} voc`;
  }

  remove(id: number) {
    return `This action removes a #${id} voc`;
  }
}
