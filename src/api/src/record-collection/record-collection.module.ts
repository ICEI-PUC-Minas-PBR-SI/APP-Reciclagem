import { Module } from '@nestjs/common';
import { RecordCollectionService } from './record-collection.service';
import { RecordCollectionController } from './record-collection.controller';
import { RecordCollectionRepository } from './record-collection.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [RecordCollectionController],
  providers: [
    RecordCollectionService,
    RecordCollectionRepository,
    PrismaService,
  ],
})
export class RecordCollectionModule {}
