import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(create: CreateUserDto, profileId: number): Promise<UserEntity> {
    try {
      return await this.prisma.user.create({
        data: {
          profile_id: profileId,
          full_name: create.full_name,
          email: create.email,
          username: create.username,
          birth_date: create.birth_date,
          complement: create.complement,
          district: create.district,
          number: create.number,
          phone: create.phone,
          status: create.status,
        },
      });
    } catch (error) {
      throw new BadRequestException(
        'An error occurred while creating the user',
      );
    }
  }

  async findByUsername(username: string): Promise<UserEntity | null> {
    return await this.prisma.user.findUnique({
      where: { username },
    });
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
    return await this.prisma.user.findUnique({
      where: { email },
    });
  }
}
