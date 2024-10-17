import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ItemResponseDto } from './dto/item.response.dto';
import { FilterItemDto } from './dto/filter-item.dto';
import { ItemsRepository } from './items.repository';

@Injectable()
export class ItemsService {
  constructor(private readonly itemsRepository: ItemsRepository) {}

  create(createItemDto: CreateItemDto) {
    return 'This action adds a new item';
  }

  async list(filter?: FilterItemDto): Promise<ItemResponseDto[]> {
    return this.itemsRepository.listItems(filter);
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
