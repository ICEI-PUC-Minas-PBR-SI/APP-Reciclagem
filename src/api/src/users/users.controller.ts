import {
  Controller,
  Post,
  Body,
  Get,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserListClientResponseDTO } from './dto/user-list-client.response.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService
      .create(createUserDto)
      .then(user => {
        return user;
      })
      .catch(error => {
        throw new HttpException(
          error.message,
          error.status || HttpStatus.BAD_REQUEST,
        );
      });
  }

  @Get('/active-clients')
  @ApiResponse({
    status: HttpStatus.OK,
    type: [UserListClientResponseDTO],
  })
  async listActiveClients(): Promise<UserListClientResponseDTO[]> {
    try {
      const users = await this.usersService.listByClientActive();
      return users;
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.BAD_REQUEST,
      );
    }
  }
}
