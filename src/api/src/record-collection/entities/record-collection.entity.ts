import { Record_Collection } from '@prisma/client';
import { EstablishmentEntity } from 'src/establishment/entities/establishment.entity';
import { UserEntity } from 'src/users/entities/user.entity';

export class RecordCollectionEntity implements Record_Collection {
  id: number;
  EstablishmentId: number;
  userId: number;
  material: string;
  amount: number;
  Measurement_Unit: string;
  Collection_Date: Date;

  user?: UserEntity;
  Establishment?: EstablishmentEntity;
}
