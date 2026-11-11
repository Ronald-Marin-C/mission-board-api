import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateMissionDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsNumber()
  @IsPositive()
  hourlyRate: number;
}