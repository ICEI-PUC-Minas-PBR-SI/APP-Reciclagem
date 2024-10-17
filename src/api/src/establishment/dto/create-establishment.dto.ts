import { IsBoolean, IsInt, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEstablishmentDto {
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
    type: Boolean,
    required: true,
  })
  @IsBoolean()
  product?: boolean;

  @ApiProperty({
    type: Boolean,
    required: false,
  })
  @IsBoolean()
  score?: boolean;
}
