import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
export class NearbyRequestDto {
  @ApiProperty()
  latitude: number;
  @ApiProperty()
  longitude: number;
  @ApiProperty()
  radius: number;
  @ApiProperty()
  keyword: string;
  @ApiProperty()
  maxPrice: number;
  @ApiProperty()
  minPrice: number;
  @ApiPropertyOptional()
  rankby: string;
  @ApiPropertyOptional()
  pagetoken?: string;
}
