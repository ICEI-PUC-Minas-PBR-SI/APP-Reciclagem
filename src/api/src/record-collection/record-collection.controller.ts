import { Controller, Post, Body } from '@nestjs/common';
import { RecordCollectionService } from './record-collection.service';
import { CreateRecordCollectionDto } from './dto/create-record-collection.dto';

@Controller('record-collection')
export class RecordCollectionController {
  constructor(
    private readonly recordCollectionService: RecordCollectionService,
  ) {}

  @Post()
  create(@Body() createRecordCollectionDto: CreateRecordCollectionDto) {
    return this.recordCollectionService.create(createRecordCollectionDto);
  }
}
