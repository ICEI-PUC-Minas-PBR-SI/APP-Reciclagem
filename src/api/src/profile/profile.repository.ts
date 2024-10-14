import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

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
      },
    });

    return profile.id;
  }
}
