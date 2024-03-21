import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LeaderboardService } from './leaderboard.service';
import { CreateLeaderboardDto } from './dto/create-leaderboard.dto';
import { UpdateLeaderboardDto } from './dto/update-leaderboard.dto';
import { EmailService } from './email.service';

@Controller('leaderboard')
@ApiTags('leaderboard')
export class LeaderboardController {
  constructor(
    private readonly leaderboardService: LeaderboardService,
    private readonly emailService: EmailService,
  ) {}

  @Get(':groupId')
  async create(@Param('groupId') groupId: string) {
    return await this.leaderboardService.create(groupId);
  }

  @Get('get-place-info/:currentGroupRefID/:placeId')
  async getPlaceInformation(
    @Param('currentGroupRefID') currentGroupRefID: string,
    @Param('placeId') placeId: string,
  ) {
    return await this.leaderboardService.getPlaceInformation(
      currentGroupRefID,
      placeId,
    );
  }

  @Get('send-email/:rec/:subject/:body')
  async sendEmail(
    @Param('rec') rec: string,
    @Param('subject') subject: string,
    @Param('body') body: string,
  ) {
    try {
      await this.emailService.sendEmail(rec, subject, body);
      return 'Email sent successfully';
    } catch (error) {
      return 'Failed to send email';
    }
  }
}
