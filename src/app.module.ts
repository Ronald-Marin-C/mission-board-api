import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { MissionsModule } from './missions/missions.module.js';

@Module({
  imports: [MissionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
