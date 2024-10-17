import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { categoryItems, TypeItems } from '../entities/item.entity';

export class CreateItemDto {
  @ApiProperty({
    type: Number,
    required: true,
  })
  @IsString()
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
  type: TypeItems;

  @ApiProperty({
    type: String,
    required: true,
    enum: categoryItems,
  })
  @IsString()
  @IsNotEmpty()
  category: categoryItems;
}
