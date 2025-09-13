import { IsString } from 'class-validator';

export class CreatePlaylistDto {
  @IsString()
  thumbnail: string;

  @IsString()
  title: string;

  @IsString()
  description: string;
}
