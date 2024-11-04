import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { profileEntity } from 'src/users/entities/user.entity';

@Injectable()
export class ProfileRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findProfileIdByLabel(label: string): Promise<number> {
    const profile = await this.prisma.profile.findFirst({
      where: {
        label: label,
      },
      select: {
        id: true,
        label: true,
      },
    });

    return profile.id;
  }

  async getById(id: number): Promise<profileEntity | undefined> {
    const profile = await this.prisma.profile.findUnique({
      where: { id },
    });

    return profile as profileEntity;
  }
}
