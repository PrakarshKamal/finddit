import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
export class GroupMemberPreferencesDto {
  @ApiProperty()
  latitude: number;
  @ApiProperty()
  longitude: number;
  @ApiProperty()
  radius: number;
  @ApiProperty()
  maxPrice: number;
  @ApiProperty()
  minPrice: number;
  @ApiPropertyOptional()
  willingToTravel: boolean;
  @ApiPropertyOptional()
  travelRadius: number;
}
