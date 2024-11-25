import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEstablishmentDto } from './dto/create-establishment.dto';
import { EstablishmentEntity } from './entities/establishment.entity';
import { EstablishmentListResponseDto } from './dto/establishment-list.response.dto';

@Injectable()
export class EstablishmentRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(create: CreateEstablishmentDto): Promise<EstablishmentEntity> {
    return await this.prisma.establishment.create({
      data: {
        userId: create.userId,
        name: create.name,
        district: create.district,
        neighborhood: create.neighborhood,
        number: create.number,
        phone: create.phone,
        product: create.product.join(', '),
        score: create.score,
        cep: create.cep,
        latitude: create.latitude,
        longitude: create.longitude,
      },
    });
  }

  async getById(id: number): Promise<EstablishmentEntity | undefined> {
    const establishment = await this.prisma.establishment.findUnique({
      where: { id },
    });

    return establishment as EstablishmentEntity;
  }

  async list(): Promise<EstablishmentListResponseDto[]> {
    return await this.prisma.establishment.findMany({
      select: {
        id: true,
        name: true,
        district: true,
        neighborhood: true,
        number: true,
        score: true,
        product: true,
        latitude: true,
        longitude: true,
      },
    });
  }
}
