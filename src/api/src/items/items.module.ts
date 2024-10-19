import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { ItemsRepository } from './items.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { EstablishmentModule } from 'src/establishment/establishment.module';

@Module({
  imports: [EstablishmentModule],
  controllers: [ItemsController],
  providers: [ItemsService, ItemsRepository, PrismaService],
})
export class ItemsModule {}
