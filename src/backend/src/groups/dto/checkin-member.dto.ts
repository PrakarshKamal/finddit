import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { NearbyRequestDto } from 'src/dto/nearby-request.dto';
interface GroupMemberPreferneces {
  // latitude: number;
  // longitude: number;
  // radius: number;
  // keyword: string;
  // maxPrice: number;
  // minPrice: number;
  // willingToTravel: boolean;
}
export class CheckinMemberDto {
  constructor(
    groupID: string,
    memberEmail: string,
    memberPreferences: GroupMemberPreferneces,
  ) {
    this.groupID = groupID;
    this.memberEmail = memberEmail;
    this.memberPreferences = memberPreferences;
  }

  @ApiProperty()
  groupID: string;
  @ApiProperty()
  memberEmail: string;
  @ApiProperty()
  memberPreferences: GroupMemberPreferneces;
}
