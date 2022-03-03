import { SoldierDTO } from "./soldier.dto";

export interface BarrackDTO
{
    id: string,
    name: string,
    location: string,
    soldiers: SoldierDTO[]
}