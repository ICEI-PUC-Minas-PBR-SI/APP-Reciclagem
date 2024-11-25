import { ApiProperty } from '@nestjs/swagger';

export class RecordCollectionResponseDTO {
  @ApiProperty()
  id: number;

  @ApiProperty()
  EstablishmentId: number;

  @ApiProperty()
  userId: number;

  @ApiProperty()
  amount: number;

  @ApiProperty()
  material: string;

  @ApiProperty()
  Measurement_Unit: string;

  @ApiProperty()
  Collection_Date: Date;
}
