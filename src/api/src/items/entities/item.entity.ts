import { Items } from '@prisma/client';

export enum TypeItems {
  Rciclavel = 'Rciclavel',
  Resisuo = 'Resisuo',
}

export enum categoryItems {
  Papel = 'Papel',
  Plastico = 'Plastico',
  Vidro = 'Vidro',
  Oleo = 'Oleo',
  Metal = 'Metal',
  Baterias = 'Baterias',
}

export class ItemEnity implements Items {
  id: number;
  EstablishmentId: number;
  name: string;
  type: TypeItems;
  category: categoryItems;
}
