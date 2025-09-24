import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UploadService } from 'src/upload/upload.service';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private upload: UploadService,
  ) {}

  getAll() {
    return this.prisma.user.findMany();
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });

    return this.prisma.user.findUnique({ where: { id: user.id } });
  }

  async showed(userId: string, courseId: string, lessonId: string) {
    const user = await this.prisma.user.findFirst({ where: { id: userId } });

    if (user) {
      return await this.prisma.show_history.create({
        data: {
          userId,
          category_id: courseId,
          lesson_id: lessonId,
        },
      });
    }
  }

  async updatePFP(id: string, profile_pic: Express.Multer.File) {
    const new_pfp = await this.upload.pfp(profile_pic);
    await this.prisma.user.update({
      where: { id },
      data: { profile_pic: new_pfp },
    });
    return this.prisma.user.findUnique({ where: { id } });
  }
}
