import {
  IsBoolean,
  IsDateString,
  IsEmail,
  IsIn,
  IsInt,
  IsNotEmpty,
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
  @IsNotEmpty()
  full_name: string;

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
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({
    type: String,
    required: true,
  })
  @IsDateString()
  @IsNotEmpty()
  birth_date: string;

  @ApiProperty({
    type: String,
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  district: string;

  @ApiProperty({
    type: Number,
    required: true,
  })
  @IsInt()
  @IsNotEmpty()
  number?: number;

  @ApiProperty({
    type: String,
    required: false,
  })
  @IsOptional()
  @IsString()
  complement?: string;

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
  status: boolean;

  @ApiProperty({
    type: String,
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;
}
