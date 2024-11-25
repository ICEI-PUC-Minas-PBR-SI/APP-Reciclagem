import { Establishment } from '@prisma/client';

export class EstablishmentEntity implements Establishment {
  userId: number;
  id: number;
  number: number;
  name: string;
  district: string;
  neighborhood: string;
  phone: string;
  product: string;
  score: boolean;
  cep: number;
  latitude: number;
  longitude: number;
}
