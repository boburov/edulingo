import { Injectable } from '@nestjs/common';
import { CreateVocDto } from './dto/create-voc.dto';
import { UpdateVocDto } from './dto/update-voc.dto';

@Injectable()
export class VocsService {
  create(createVocDto: CreateVocDto) {
    return 'This action adds a new voc';
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
