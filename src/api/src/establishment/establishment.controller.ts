import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
  Get,
  Param,
} from '@nestjs/common';
import { EstablishmentService } from './establishment.service';
import { CreateEstablishmentDto } from './dto/create-establishment.dto';
import { ApiResponse } from '@nestjs/swagger';
import { EstablishmentResponseDto } from './dto/establishment.response.dto';
import { EstablishmentListResponseDto } from './dto/establishment-list.response.dto';

@Controller('establishment')
export class EstablishmentController {
  constructor(private readonly establishmentService: EstablishmentService) {}

  @Post()
  create(@Body() data: CreateEstablishmentDto) {
    return this.establishmentService
      .create(data)
      .then(user => {
        return user;
      })
      .catch(error => {
        throw new HttpException(
          error.message,
          error.status || HttpStatus.BAD_REQUEST,
        );
      });
  }

  @Get(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    type: EstablishmentResponseDto,
  })
  getById(@Param('id') id: number): Promise<EstablishmentResponseDto> {
    return this.establishmentService
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

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    type: [EstablishmentListResponseDto],
  })
  list(): Promise<EstablishmentListResponseDto[]> {
    return this.establishmentService.list().catch(error => {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.BAD_REQUEST,
      );
    });
  }
}
