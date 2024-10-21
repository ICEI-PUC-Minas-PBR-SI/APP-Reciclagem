import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ItemResponseDto } from './dto/item.response.dto';
import { FilterItemDto } from './dto/filter-item.dto';
import { ItemsRepository } from './items.repository';
import { EstablishmentService } from 'src/establishment/establishment.service';

@Injectable()
export class ItemsService {
  constructor(
    private readonly itemsRepository: ItemsRepository,
    private readonly establishmentService: EstablishmentService,
  ) {}

  async create(data: CreateItemDto): Promise<ItemResponseDto> {
    await this.establishmentService.getById(data.EstablishmentId);

    return this.itemsRepository.create(data);
  }

  async list(filter?: FilterItemDto): Promise<ItemResponseDto[]> {
    return this.itemsRepository.listItems(filter);
  }

  async getById(id: number): Promise<ItemResponseDto> {
    const result = await this.itemsRepository.getById(id);

    if (!result) {
      throw new NotFoundException('items not found');
    }

    return result;
  }

  async update(id: number, data: UpdateItemDto): Promise<ItemResponseDto> {
    await this.getById(id);

    return await this.itemsRepository.update(id, data);
  }

  async remove(id: number): Promise<void> {
    await this.getById(id);

    await this.itemsRepository.remove(id);
  }

  async searchByName(name: string): Promise<ItemResponseDto[]> {
    if (!name) {
      throw new BadRequestException(
        'You need to enter the name of the item in the search',
      );
    }

    const result = await this.itemsRepository.searchByName(name);

    if (!result || result.length === 0) {
      throw new NotFoundException('No items found with the given name');
    }

    return result;
  }
}
