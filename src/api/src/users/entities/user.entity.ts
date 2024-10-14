import { User } from '@prisma/client';

export enum Profiles {
  ADMINISTRATOR = 'ADMINISTRATOR',
  COLLECTOR = 'COLLECTOR',
  CLIENT = 'CLIENT',
}

export class UserEntity implements User {
  id: number;
  number: number;
  profile_id: number;
  full_name: string;
  email: string;
  username: string;
  birth_date: Date;
  district: string;
  complement: string;
  phone: string;
  status: boolean;
  password: string;
}
