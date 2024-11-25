import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';
import { ProfileRepository } from 'src/profile/profile.repository';
import { Profiles, UserEntity } from './entities/user.entity';
import { UserListClientResponseDTO } from './dto/user-list-client.response.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly userRepository: UsersRepository,
    private readonly profileRepository: ProfileRepository,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const profileId = await this.verifyProfileName(createUserDto.profile_name);

    if (createUserDto.profile_name === Profiles.CLIENT) {
      await this.verifyUserNameDuplicity(createUserDto.username);
    }

    await this.verifyEmailDuplicity(createUserDto.email);

    return this.userRepository.create(createUserDto, profileId);
  }

  async verifyProfileName(name: string): Promise<number> {
    const profile = await this.profileRepository.findProfileIdByLabel(name);
    if (!profile) {
      throw new BadRequestException('Profile not found.');
    }

    return profile;
  }

  async verifyUserNameDuplicity(userName: string) {
    const usernameExists = await this.userRepository.findByUsername(userName);

    if (usernameExists) {
      throw new BadRequestException('Username already exists.');
    }
  }

  async verifyEmailDuplicity(email: string): Promise<UserEntity> {
    const emailExists = await this.findByEmail(email);

    if (emailExists) {
      throw new BadRequestException('Email already exists.');
    }

    return emailExists;
  }

  async findByEmail(email: string): Promise<UserEntity> {
    return await this.userRepository.findByEmail(email);
  }

  async listByClientActive(): Promise<UserListClientResponseDTO[]> {
    const users = await this.userRepository.listByClientActive();

    return users.map(user => ({
      id: user.id,
      profile_id: user.profile_id,
      username: user.username,
      full_name: user.full_name,
      status: user.status,
    }));
  }

  // findAll() {
  //   return `This action returns all users`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
