import {
  IsBoolean,
  IsEmail,
  IsIn,
  IsLatitude,
  IsLongitude,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { Profiles } from '../entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

const ProfilesKeys = Object.keys(Profiles) as Array<keyof typeof Profiles>;

export class CreateUserDto {
  @ApiProperty({
    type: String,
    enum: Profiles,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @IsIn(ProfilesKeys.filter(c => c !== 'ADMINISTRATOR'))
  profile_name: Profiles;

  @ApiProperty({
    type: String,
    required: true,
  })
  @IsString()
  @IsOptional()
  full_name?: string;

  @ApiProperty({
    type: String,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    type: String,
    required: true,
  })
  @IsOptional()
  @IsString()
  username?: string;

  @ApiProperty({
    type: String,
    required: true,
  })
  @IsOptional()
  @IsString()
  number?: string;

  @ApiProperty({
    type: String,
    required: true,
  })
  @IsOptional()
  @IsString()
  cep?: string;

  @ApiProperty({
    type: String,
    required: true,
  })
  @IsOptional()
  @IsString()
  street?: string;

  @ApiProperty({
    type: String,
    required: true,
  })
  @IsOptional()
  @IsString()
  state?: string;

  @ApiProperty({
    type: String,
    required: true,
  })
  @IsOptional()
  @IsString()
  city?: string;

  @ApiProperty({
    type: String,
    required: true,
  })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({
    type: Boolean,
    required: true,
  })
  @IsBoolean()
  status: boolean;

  @ApiProperty({
    type: String,
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;

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
