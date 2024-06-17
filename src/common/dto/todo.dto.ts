import { IsBoolean, IsInt, IsString } from 'class-validator';

export class TodoDto {
  @IsInt()
  userId: number;

  @IsInt()
  id: number;

  @IsString()
  title: string;

  @IsBoolean()
  completed: boolean;
}
