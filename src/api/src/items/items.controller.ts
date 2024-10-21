import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  Query,
  HttpException,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';
import { ItemResponseDto } from './dto/item.response.dto';
import { FilterItemDto } from './dto/filter-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  @ApiResponse({
    status: HttpStatus.OK,
    type: ItemResponseDto,
  })
  create(@Body() data: CreateItemDto): Promise<ItemResponseDto> {
    return this.itemsService
      .create(data)
      .then(item => {
        return item;
      })
      .catch(error => {
        throw new HttpException(
          error.message,
          error.status || HttpStatus.BAD_REQUEST,
        );
      });
  }

  @Get('search')
  @ApiQuery({ name: 'name', required: true })
  @ApiResponse({
    status: HttpStatus.OK,
    type: [ItemResponseDto],
  })
  async searchByName(@Query('name') name: string): Promise<ItemResponseDto[]> {
    return this.itemsService.searchByName(name).catch(error => {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.BAD_REQUEST,
      );
    });
  }

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    type: [ItemResponseDto],
  })
  list(@Query('filter') filter?: FilterItemDto): Promise<ItemResponseDto[]> {
    return this.itemsService.list(filter).catch(error => {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.BAD_REQUEST,
      );
    });
  }

  @Get(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    type: ItemResponseDto,
  })
  getById(@Param('id') id: number): Promise<ItemResponseDto> {
    return this.itemsService
      .getById(id)
      .then(item => {
        return item;
      })
      .catch(error => {
        throw new HttpException(
          error.message,
          error.status || HttpStatus.NOT_FOUND,
        );
      });
  }

  @Patch(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    type: ItemResponseDto,
  })
  update(
    @Param('id') id: number,
    @Body() updateItemDto: UpdateItemDto,
  ): Promise<ItemResponseDto> {
    return this.itemsService
      .update(id, updateItemDto)
      .then(updatedItem => {
        return updatedItem;
      })
      .catch(error => {
        throw new HttpException(
          error.message,
          error.status || HttpStatus.BAD_REQUEST,
        );
      });
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<{ success: boolean }> {
    return this.itemsService
      .remove(+id)
      .then(() => {
        return { success: true };
      })
      .catch(error => {
        throw new HttpException(
          error.message,
          error.status || HttpStatus.BAD_REQUEST,
        );
      });
  }
}
