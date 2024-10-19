import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { categoryItems, TypeItems } from '../entities/item.entity';

export class FilterItemDto {
  @ApiProperty({
    type: String,
    required: true,
    enum: TypeItems,
  })
  @IsString()
  @IsOptional()
  type?: TypeItems;

  @ApiProperty({
    type: String,
    required: true,
    enum: categoryItems,
  })
  @IsString()
  @IsOptional()
  category?: categoryItems;
}
