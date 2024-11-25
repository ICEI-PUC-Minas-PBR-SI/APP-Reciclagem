import { Injectable } from '@nestjs/common';
import { RecordCollectionRepository } from './record-collection.repository';
import { CreateRecordCollectionDto } from './dto/create-record-collection.dto';
import { RecordCollectionResponseDTO } from './dto/record-collection.response.dto';

@Injectable()
export class RecordCollectionService {
  constructor(
    private readonly recordCollectionRepository: RecordCollectionRepository,
  ) {}

  async create(
    data: CreateRecordCollectionDto,
  ): Promise<RecordCollectionResponseDTO> {
    return this.recordCollectionRepository.create(data);
  }
}
