export type Mission = {
    id:number;
    title: string;
    city: string;
    hourlyRate: number;
    status: 'OPEN' | 'FAILED';
};

