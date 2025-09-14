import { IsString } from 'class-validator';

export class CreatePlaylistDto {
  thumbnail: Express.Multer.File;

  @IsString()
  title: string;

  @IsString()
  description: string;
}
