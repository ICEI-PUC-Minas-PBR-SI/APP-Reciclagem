import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';
import { ProfileRepository } from 'src/profile/profile.repository';

@Injectable()
export class UsersService {
  constructor(
    private readonly userRepository: UsersRepository,
    private readonly profileRepository: ProfileRepository,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const profileId = await this.verifyProfileName(createUserDto.profile_name);

    await this.verifyUserNameDuplicity(createUserDto.username);
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

  async verifyEmailDuplicity(email: string) {
    const emailExists = await this.userRepository.findByEmail(email);

    if (emailExists) {
      throw new BadRequestException('Email already exists.');
    }
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
