import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service.js';
import { Mission } from '../generated/prisma/client.js';

@Injectable()
export class MissionsService {
    constructor(private readonly prisma: PrismaService){}
    
    async findAll(): Promise<Mission[]> {
        return this.prisma.mission.findMany();
    }

    async create(data: Omit<Mission,'id' | 'status'>):Promise<Mission> {
        return this.prisma.mission.create({data});
    };

    async findOne(id:number): Promise<Mission>{
        const mission = await this.prisma.mission.findUnique({where: {id}});

        if (!mission){
            throw new NotFoundException(`Mission ${id} not found`);
        }

        return mission;
    };

    
    async remove(id:number): Promise<void>{
        await this.findOne(id);
        await this.prisma.mission.delete({where: {id}});
    }

    async update(id: number, data: Partial<Omit<Mission, 'id'>>): Promise<Mission> {
        await this.findOne(id);
        return this.prisma.mission.update({where: {id}, data});
    
    }






}

