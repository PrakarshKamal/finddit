import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
export class CreateGroupDto {
  constructor(
    groupName: string,
    groupIconID: number,
    groupAdminEmail: string,
    groupMembersEmails: string[],
    votingDeadline: number,
    isActive: boolean,
  ) {
    this.groupName = groupName;
    this.groupIconID = groupIconID;
    this.groupAdminEmail = groupAdminEmail;
    this.groupMembersEmails = groupMembersEmails;
    this.votingDeadline = votingDeadline;
    this.isActive = isActive;
  }

  @ApiProperty()
  groupName: string;
  @ApiProperty()
  groupIconID: number;
  @ApiProperty()
  groupAdminEmail: string;
  @ApiProperty()
  groupMembersEmails: string[];
  @ApiProperty()
  votingDeadline: number;
  @ApiProperty()
  isActive: boolean;
}
