import { CompanyDTO } from "./company.dto";
import { DepartmentDTO } from "./department.dto";
import { SoldierServiceDTO } from "./soldier-service.dto";

export interface SoldierDTO
{
    id: string,
    name : string,
    surname: string,
    rank : string,
    department: DepartmentDTO,
    company: CompanyDTO,
    services: SoldierServiceDTO[]
}