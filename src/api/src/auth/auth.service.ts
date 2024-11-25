import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Profiles, UserEntity } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async authenticate(email: string, password: string): Promise<any> {
    const user = await this.validateUser(email, password);

    const payload = { email: user.email, sub: user.id };

    let establishment = null;

    if (user.profile.label === Profiles.COLLECTOR) {
      establishment = user.Establishment ? user.Establishment[0] : null;
    }

    return {
      access_token: this.jwtService.sign(payload),
      profile_name: user.profile.label,
      users: {
        id: user.id,
        username: user.username,
        email: user.email,
        full_name: user.full_name,
      },
      establishment: establishment
        ? {
            id: establishment.id,
            name: establishment.name,
            score: establishment.score,
            cep: establishment.cep,
          }
        : null,
    };
  }

  private async validateUser(
    email: string,
    password: string,
  ): Promise<UserEntity> {
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Email ou senha inválidos');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Email ou senha inválidos');
    }

    if (!user.profile) {
      throw new UnauthorizedException('Usuário não possui um perfil associado');
    }

    return user;
  }
}
