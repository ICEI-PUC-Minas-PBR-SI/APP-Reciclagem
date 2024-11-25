import { ApiProperty } from '@nestjs/swagger';

export class UserListClientResponseDTO {
  @ApiProperty()
  id: number;

  @ApiProperty()
  profile_id: number;

  @ApiProperty()
  username: string;

  @ApiProperty()
  full_name: string;

  @ApiProperty()
  status: boolean;
}
