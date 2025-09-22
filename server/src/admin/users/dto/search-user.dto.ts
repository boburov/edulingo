import { IsString } from "class-validator";

export class SearchUserParams {
  @IsString()
  title: string;

  @IsString()
  description: string;
}
