import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NearbySearchModule } from './nearby-search/nearby-search.module';
import { DatabaseModule } from './db/db.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [NearbySearchModule, DatabaseModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
