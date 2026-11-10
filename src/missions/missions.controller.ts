import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import type { Mission } from './missions.js';
import { MissionsService } from './missions.service.js';
import { get } from 'http';
import { reportUnhandledError } from 'rxjs/internal/util/reportUnhandledError';

@Controller('missions')
export class MissionsController {
    constructor(private readonly missionsService: MissionsService){}

    @Get()
    findAll() : Mission[] {
        return this.missionsService.findAll();
    }

    @Post()
    create(@Body() body: Omit<Mission, 'id' | 'status'>): Mission {
        return this.missionsService.create(body);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number): Mission {
        return this.missionsService.findOne(id);
    }

    @Delete(':id')
    @HttpCode(204)
    remove(@Param('id', ParseIntPipe) id: number): void {
        return this.missionsService.remove(id);
    }

    @Patch(':id')
    @HttpCode(204)
    update(@Param('id', ParseIntPipe) id: number, @Body() body: Partial<Omit<Mission, 'id'>>) : Mission {
        return this.missionsService.update(id, body);
    }
}
