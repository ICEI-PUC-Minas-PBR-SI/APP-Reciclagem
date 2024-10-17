import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEstablishmentDto } from './dto/create-establishment.dto';
import { EstablishmentEntity } from './entities/establishment.entity';

@Injectable()
export class EstablishmentRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(create: CreateEstablishmentDto): Promise<EstablishmentEntity> {
    return await this.prisma.establishment.create({
      data: {
        name: create.name,
        district: create.district,
        neighborhood: create.neighborhood,
        number: create.number,
        phone: create.phone,
        product: create.product,
        score: create.score,
      },
    });
  }
}
