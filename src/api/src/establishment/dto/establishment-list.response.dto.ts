import { ApiProperty } from '@nestjs/swagger';

export class EstablishmentListResponseDto {
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
  score: boolean;
}
