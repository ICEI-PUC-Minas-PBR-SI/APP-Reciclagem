import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { categoryItems, ItemEnity, TypeItems } from './entities/item.entity';
import { FilterItemDto } from './dto/filter-item.dto';
import { ItemResponseDto } from './dto/item.response.dto';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemsRepository {
  constructor(private readonly prisma: PrismaService) {}

  private mapPrismaItemToEntity(item: any): ItemEnity {
    return {
      id: item.id,
      EstablishmentId: item.EstablishmentId,
      name: item.name,
      type: item.type as TypeItems,
      category: item.category as categoryItems,
    };
  }

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

    return items.map(item => this.mapPrismaItemToEntity(item));
  }

  async create(create: CreateItemDto): Promise<ItemEnity> {
    const newItem = await this.prisma.items.create({
      data: {
        EstablishmentId: create.EstablishmentId,
        name: create.name,
        type: create.type as TypeItems,
        category: create.category as categoryItems,
      },
    });

    return this.mapPrismaItemToEntity(newItem);
  }

  async getById(id: number): Promise<ItemEnity | undefined> {
    const items = await this.prisma.items.findUnique({
      where: { id },
    });

    return items as ItemEnity;
  }

  async remove(id: number): Promise<void> {
    await this.prisma.items.delete({
      where: { id },
    });
  }

  async update(id: number, updateData: UpdateItemDto): Promise<ItemEnity> {
    const updatedItem = await this.prisma.items.update({
      where: { id },
      data: {
        name: updateData.name,
        EstablishmentId: updateData.EstablishmentId,
        type: updateData.type as TypeItems,
        category: updateData.category as categoryItems,
      },
    });

    return this.mapPrismaItemToEntity(updatedItem);
  }

  async searchByName(name: string): Promise<ItemResponseDto[]> {
    const items = await this.prisma.items.findMany({
      where: {
        name,
      },
    });

    return items.map(item => this.mapPrismaItemToEntity(item));
  }
}
