import { ApiProperty } from '@nestjs/swagger';

export class EstablishmentResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  district: string;

  @ApiProperty()
  neighborhood: string;

  @ApiProperty()
  number: number;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  product: string;

  @ApiProperty()
  score: boolean;

  @ApiProperty()
  cep: number;

  @ApiProperty()
  latitude: number;

  @ApiProperty()
  longitude: number;
}
