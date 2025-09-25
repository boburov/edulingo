import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HistoryService {
  constructor(private prisma: PrismaService) {}

  async getHistoryWithLessons(userId: string) {
  return this.prisma.show_history.findMany({
    where: { userId },
    orderBy: { showed_at: 'desc' },
    select: {
      showed_at: true,
      lesson: {
        select: {
          id: true,
          title: true,
          video_url: true,
          playlist: { select: { thumbnail: true } },
        },
      },
    },
  });
}

}
