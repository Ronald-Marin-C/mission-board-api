import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';

import { MissionsService } from './missions.service.js';
import { Mission } from '../generated/prisma/client.js';
import { CreateMissionDto } from './create-mission.dto.js';
import { UpdateMissionDto } from './update-mission.dto.js';

@Controller('missions')
export class MissionsController {
    constructor(private readonly missionsService: MissionsService){}

    @Get()
    async findAll() : Promise<Mission[]> {
        return this.missionsService.findAll();
    }

    @Post()
    async create(@Body() body: CreateMissionDto): Promise<Mission> {
        return this.missionsService.create(body);
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number): Promise<Mission> {
        return this.missionsService.findOne(id);
    }

    @Delete(':id')
    @HttpCode(204)
    async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.missionsService.remove(id);
    }

    @Patch(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateMissionDto) : Promise<Mission> {
        return this.missionsService.update(id, body);
    }
}
