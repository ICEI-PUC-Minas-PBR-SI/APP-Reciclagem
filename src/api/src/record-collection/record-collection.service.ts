import { Injectable } from '@nestjs/common';
import { RecordCollectionRepository } from './record-collection.repository';
import { CreateRecordCollectionDto } from './dto/create-record-collection.dto';

@Injectable()
export class RecordCollectionService {
  constructor(
    private readonly recordCollectionRepository: RecordCollectionRepository,
  ) {}

  async create(data: CreateRecordCollectionDto) {
    return this.recordCollectionRepository.create(data);
  }

  // async getById(id: number): Promise<EstablishmentResponseDto> {
  //   const result = await this.establishmentRepository.getById(id);

  //   if (!result) {
  //     throw new NotFoundException('establishment not found');
  //   }

  //   return result;
  // }

  // async list(): Promise<EstablishmentListResponseDto[]> {
  //   return this.establishmentRepository.list();
  // }
}
