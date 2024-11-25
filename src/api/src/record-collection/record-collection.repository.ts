import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRecordCollectionDto } from './dto/create-record-collection.dto';
import { RecordCollectionEntity } from './entities/record-collection.entity';

@Injectable()
export class RecordCollectionRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    create: CreateRecordCollectionDto,
  ): Promise<RecordCollectionEntity> {
    return await this.prisma.record_Collection.create({
      data: {
        EstablishmentId: create.EstablishmentId,
        userId: create.userId,
        amount: create.amount,
        material: create.material,
        Measurement_Unit: create.Measurement_Unit,
        Collection_Date: new Date(),
      },
    });
  }
}
