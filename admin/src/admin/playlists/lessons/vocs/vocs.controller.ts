import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VocsService } from './vocs.service';
import { CreateVocDto } from './dto/create-voc.dto';
import { UpdateVocDto } from './dto/update-voc.dto';

@Controller('vocs')
export class VocsController {
  constructor(private readonly vocsService: VocsService) {}

  @Post()
  create(@Body() createVocDto: CreateVocDto) {
    return this.vocsService.create(createVocDto);
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
