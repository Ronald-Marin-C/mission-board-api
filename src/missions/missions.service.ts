import { Injectable, NotFoundException } from '@nestjs/common';
import { Mission } from './missions.js';
import { map } from 'rxjs';

@Injectable()
export class MissionsService {

    private missions: Mission[] = [  
        { id: 1, title: 'Serveur', city: 'Aix', hourlyRate: 12.5, status: 'OPEN' },
        {id: 2, title: 'Interview', city: 'Marseille', hourlyRate: 10.2, status: 'OPEN'},
    ];

    private nextId = 3;

    findAll(): Mission[]{
        return this.missions;
    }

    create(data: Omit<Mission,'id' | 'status'>): Mission {
        const mission: Mission = {
        id: this.nextId,
        ...data,
        hourlyRate: data.hourlyRate,
        status: "OPEN",
        }

        this.nextId++;
        this.missions.push(mission)
        return mission;
    };

    findOne(id:number): Mission{
        const mission = this.missions.find((m) => m.id === id);
        if(!mission){
            throw new NotFoundException(`Mission ${id} not found`);
        }

        return mission;
    };

    remove(id:number): void{
        this.findOne(id);
        this.missions = this.missions.filter((m) => m.id !== id);
    }

    update(id: number, data: Partial<Omit<Mission, 'id'>>): Mission {
        const mission = this.findOne(id);
        const updated = {...mission, ...data};
        this.missions = this.missions.map((m) => (m.id === id ? updated : m));
        return updated;
    }






}

