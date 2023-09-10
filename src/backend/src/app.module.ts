import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NearbySearchModule } from './nearby-search/nearby-search.module';

@Module({
  imports: [NearbySearchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
