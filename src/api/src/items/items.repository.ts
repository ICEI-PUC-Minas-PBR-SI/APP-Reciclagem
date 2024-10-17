import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { categoryItems, TypeItems } from './entities/item.entity';
import { FilterItemDto } from './dto/filter-item.dto';
import { ItemResponseDto } from './dto/item.response.dto';

@Injectable()
export class ItemsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async listItems(filter?: FilterItemDto): Promise<ItemResponseDto[]> {
    const whereCondition = filter
      ? {
          type: filter.type,
          category: filter.category,
        }
      : {};

    const items = await this.prisma.items.findMany({
      where: whereCondition,
    });

    return items.map(item => ({
      id: item.id,
      EstablishmentId: item.EstablishmentId,
      name: item.name,
      type: item.type as TypeItems,
      category: item.category as categoryItems,
    }));
  }
}
