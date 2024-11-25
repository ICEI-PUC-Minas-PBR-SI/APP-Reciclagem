import { Controller, Post, Body, HttpStatus } from '@nestjs/common';
import { RecordCollectionService } from './record-collection.service';
import { CreateRecordCollectionDto } from './dto/create-record-collection.dto';
import { ApiResponse } from '@nestjs/swagger';
import { RecordCollectionResponseDTO } from './dto/record-collection.response.dto';

@Controller('record-collection')
export class RecordCollectionController {
  constructor(
    private readonly recordCollectionService: RecordCollectionService,
  ) {}

  @Post()
  @ApiResponse({
    status: HttpStatus.OK,
    type: [RecordCollectionResponseDTO],
  })
  create(
    @Body() createRecordCollectionDto: CreateRecordCollectionDto,
  ): Promise<RecordCollectionResponseDTO> {
    return this.recordCollectionService.create(createRecordCollectionDto);
  }
}
