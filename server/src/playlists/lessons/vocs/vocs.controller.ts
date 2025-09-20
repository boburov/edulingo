import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { VocsService } from './vocs.service';
import { CreateVocDto } from './dto/create-voc.dto';
import { UpdateVocDto } from './dto/update-voc.dto';
import { AdminAccessGuard } from 'src/guards/admin-access/admin-access.guard';

@Controller('playlists/lessons/:lesson_id/vocs')
export class VocsController {
  constructor(private readonly vocsService: VocsService) {}

  @UseGuards(AdminAccessGuard)
  @Post()
  create(@Param('lesson_id') lesson_id: string, @Body() data: CreateVocDto) {
    return this.vocsService.create(lesson_id, data);
  }

  @Get()
  findAll() {
    return this.vocsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vocsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVocDto: UpdateVocDto) {
    return this.vocsService.update(+id, updateVocDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vocsService.remove(+id);
  }
}
