import { Module } from '@nestjs/common';
import { LeaderboardService } from './leaderboard.service';
import { LeaderboardController } from './leaderboard.controller';
import { GroupsModule } from 'src/groups/groups.module';
import { DbService } from 'src/db/db.service';
import { DatabaseModule } from 'src/db/db.module';

@Module({
  controllers: [LeaderboardController],
  providers: [LeaderboardService],
  imports: [DatabaseModule],
  exports: [LeaderboardService],
})
export class LeaderboardModule {}
