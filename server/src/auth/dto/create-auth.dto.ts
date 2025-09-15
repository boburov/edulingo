import { IsEmail, IsString } from 'class-validator';

export class CreateAuthDto {
  @IsString()
  name: string;

  @IsString()
  surname: string;
  
  @IsEmail()
  email: string;
}
