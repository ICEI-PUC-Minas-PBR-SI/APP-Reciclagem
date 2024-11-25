import {
  IsArray,
  IsBoolean,
  IsInt,
  IsLatitude,
  IsLongitude,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEstablishmentDto {
  @ApiProperty({
    type: Number,
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @ApiProperty({
    type: String,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    type: String,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  district: string;

  @ApiProperty({
    type: String,
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  neighborhood: string;

  @ApiProperty({
    type: Number,
    required: true,
  })
  @IsInt()
  @IsNotEmpty()
  number: number;

  @ApiProperty({
    type: String,
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  phone: string;

  @ApiProperty({
    type: [String],
    required: true,
  })
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  product: string[];

  @ApiProperty({
    type: Boolean,
    required: false,
  })
  @IsBoolean()
  score?: boolean;

  @ApiProperty({
    type: Number,
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  cep!: number;

  @ApiProperty({
    type: Number,
    required: true,
    example: 40.7128,
  })
  @IsNumber()
  @IsNotEmpty()
  @IsLatitude()
  latitude!: number;

  @ApiProperty({
    type: Number,
    required: true,
    example: -74.006,
  })
  @IsNotEmpty()
  @IsNumber()
  @IsLongitude()
  longitude!: number;
}
