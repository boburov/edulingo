import { Controller, Get, Param } from '@nestjs/common';
import { HistoryService } from './history.service';

@Controller('history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @Get(':userId')
  async getUserHistory(@Param('userId') userId: string) {
    return this.historyService.getHistoryWithLessons(userId);
  }
}
