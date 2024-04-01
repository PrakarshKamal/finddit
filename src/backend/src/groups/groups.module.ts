import { Module } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { GroupsController } from './groups.controller';
import { DatabaseModule } from 'src/db/db.module';
import { NearbySearchModule } from '../nearby-search/nearby-search.module';
import { LeaderboardModule } from 'src/leaderboard/leaderboard.module';

@Module({
  imports: [DatabaseModule, NearbySearchModule, LeaderboardModule],
  controllers: [GroupsController],
  providers: [GroupsService],
})
export class GroupsModule {}
