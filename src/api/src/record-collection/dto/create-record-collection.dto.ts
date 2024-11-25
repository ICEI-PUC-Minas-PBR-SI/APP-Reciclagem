import { IsNotEmpty, IsNumber, IsString, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRecordCollectionDto {
  @ApiProperty({
    type: Number,
    required: true,
    description:
      'Identifier for the establishment associated with the collection',
  })
  @IsNumber()
  @IsNotEmpty()
  EstablishmentId: number;

  @ApiProperty({
    type: Number,
    required: true,
    description: 'Identifier for the user associated with the collection',
  })
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @ApiProperty({
    type: String,
    required: true,
    description: 'Type of material collected',
  })
  @IsString()
  @IsNotEmpty()
  material: string;

  @ApiProperty({
    type: String,
    required: true,
    description: 'Unit of measurement for the collected material',
  })
  @IsString()
  @IsNotEmpty()
  Measurement_Unit: string;

  @ApiProperty({
    type: Date,
    required: true,
    description: 'Date when the collection was made',
  })
  @IsDate()
  @IsNotEmpty()
  Collection_Date: Date;
}
