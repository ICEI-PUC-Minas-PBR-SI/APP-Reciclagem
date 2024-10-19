import { ApiProperty } from '@nestjs/swagger';
import { categoryItems, TypeItems } from '../entities/item.entity';

export class ItemResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  EstablishmentId: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  type: TypeItems;

  @ApiProperty()
  category: categoryItems;
}
