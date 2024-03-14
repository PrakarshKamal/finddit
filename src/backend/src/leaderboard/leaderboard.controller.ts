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

@Controller('leaderboard')
@ApiTags('leaderboard')
export class LeaderboardController {
  constructor(private readonly leaderboardService: LeaderboardService) {}

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
}
