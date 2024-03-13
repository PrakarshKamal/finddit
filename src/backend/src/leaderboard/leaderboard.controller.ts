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

  @Post()
  create(@Body() createLeaderboardDto: CreateLeaderboardDto) {
    return this.leaderboardService.create(createLeaderboardDto);
  }

  @Get()
  findAll() {
    return this.leaderboardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.leaderboardService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLeaderboardDto: UpdateLeaderboardDto,
  ) {
    return this.leaderboardService.update(+id, updateLeaderboardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.leaderboardService.remove(+id);
  }
}
