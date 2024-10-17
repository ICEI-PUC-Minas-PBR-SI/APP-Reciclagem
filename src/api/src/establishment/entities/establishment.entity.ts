import { Establishment } from '@prisma/client';

export class EstablishmentEntity implements Establishment {
  id: number;
  number: number;
  name: string;
  district: string;
  neighborhood: string;
  phone: string;
  product: boolean;
  score: boolean;
}
