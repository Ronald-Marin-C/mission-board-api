import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { MissionsModule } from './missions/missions.module.js';
import { PrismaModule } from './prisma/prisma.module.js';

@Module({
  imports: [PrismaModule, MissionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
