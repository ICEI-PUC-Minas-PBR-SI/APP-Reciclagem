import { Module } from '@nestjs/common';
import { EstablishmentService } from './establishment.service';
import { EstablishmentController } from './establishment.controller';
import { EstablishmentRepository } from './establishment.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [EstablishmentController],
  providers: [EstablishmentService, EstablishmentRepository, PrismaService],
  exports: [EstablishmentService],
})
export class EstablishmentModule {}
