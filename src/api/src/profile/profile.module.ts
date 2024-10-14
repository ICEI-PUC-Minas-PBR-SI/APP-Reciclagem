import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProfileRepository } from './profile.repository';

@Module({
  providers: [PrismaService, ProfileRepository],
  exports: [ProfileRepository],
})
export class ProfileModule {}
