import { Profile, User } from '@prisma/client';
import { EstablishmentEntity } from 'src/establishment/entities/establishment.entity';

export enum Profiles {
  ADMINISTRATOR = 'ADMINISTRATOR',
  COLLECTOR = 'COLLECTOR',
  CLIENT = 'CLIENT',
}

export class UserEntity implements User {
  id: number;
  number: string;
  cep: string;
  city: string;
  street: string;
  state: string;
  latitude: number;
  longitude: number;
  profile_id: number;
  full_name: string;
  email: string;
  username: string;
  phone: string;
  status: boolean;
  password: string;

  profile?: profileEntity;
  Establishment?: EstablishmentEntity;
}

export class profileEntity implements Profile {
  name: string;
  id: number;
  status: boolean;
  label: string;
  is_admin: boolean;
}
