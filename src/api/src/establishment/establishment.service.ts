import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEstablishmentDto } from './dto/create-establishment.dto';
import { EstablishmentRepository } from './establishment.repository';
import { EstablishmentResponseDto } from './dto/establishment.response.dto';
import { EstablishmentListResponseDto } from './dto/establishment-list.response.dto';

@Injectable()
export class EstablishmentService {
  constructor(
    private readonly establishmentRepository: EstablishmentRepository,
  ) {}

  async create(data: CreateEstablishmentDto) {
    return this.establishmentRepository.create(data);
  }

  async getById(id: number): Promise<EstablishmentResponseDto> {
    const result = await this.establishmentRepository.getById(id);

    if (!result) {
      throw new NotFoundException('establishment not found');
    }

    return result;
  }

  async list(): Promise<EstablishmentListResponseDto[]> {
    return this.establishmentRepository.list();
  }
}
