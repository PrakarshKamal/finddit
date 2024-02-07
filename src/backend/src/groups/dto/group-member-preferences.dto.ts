import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
export class GroupMemberPreferencesDto {
  @ApiPropertyOptional()
  latitude: number;
  @ApiPropertyOptional()
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
