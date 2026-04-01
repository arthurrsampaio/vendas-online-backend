import { IsString } from 'class-validator';

export class UpdateUserDTO {
  @IsString()
  newPassword: string;

  @IsString()
  lastPassword: string;
}
