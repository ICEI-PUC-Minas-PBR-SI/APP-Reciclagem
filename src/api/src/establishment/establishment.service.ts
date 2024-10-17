import { Injectable } from '@nestjs/common';
import { CreateEstablishmentDto } from './dto/create-establishment.dto';
import { EstablishmentRepository } from './establishment.repository';

@Injectable()
export class EstablishmentService {
  constructor(
    private readonly establishmentRepository: EstablishmentRepository,
  ) {}
  async create(data: CreateEstablishmentDto) {
    return this.establishmentRepository.create(data);
  }
}
