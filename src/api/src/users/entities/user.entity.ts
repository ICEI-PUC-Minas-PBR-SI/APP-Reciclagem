import { Profile, User } from '@prisma/client';

export enum Profiles {
  ADMINISTRATOR = 'ADMINISTRATOR',
  COLLECTOR = 'COLLECTOR',
  CLIENT = 'CLIENT',
}

export class UserEntity implements User {
  cep: number;
  latitude: number;
  longitude: number;
  id: number;
  number: number;
  profile_id: number;
  full_name: string;
  email: string;
  username: string;
  district: string;
  complement: string;
  phone: string;
  status: boolean;
  password: string;

  profile?: profileEntity;
}

export class profileEntity implements Profile {
  name: string;
  id: number;
  status: boolean;
  label: string;
  is_admin: boolean;
}
