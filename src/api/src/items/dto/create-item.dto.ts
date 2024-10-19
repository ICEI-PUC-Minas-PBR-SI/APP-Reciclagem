import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { categoryItems, TypeItems } from '../entities/item.entity';

export class CreateItemDto {
  @ApiProperty({
    type: Number,
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  EstablishmentId: number;

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
    enum: TypeItems,
  })
  @IsString()
  @IsNotEmpty()
  @IsEnum(TypeItems)
  type: TypeItems;

  @ApiProperty({
    type: String,
    required: true,
    enum: categoryItems,
  })
  @IsString()
  @IsNotEmpty()
  @IsEnum(categoryItems)
  category: categoryItems;
}
