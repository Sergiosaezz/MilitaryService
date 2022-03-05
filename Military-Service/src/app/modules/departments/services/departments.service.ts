import { Injectable } from '@angular/core';
import { liveQuery } from 'dexie';
import { DepartmentDTO } from 'src/app/shared/domain/DTOs/department.dto';
import { DexieService } from 'src/app/shared/services/dexie.service';

@Injectable({
  providedIn: 'root',
})
export class DepartmentsService {
  constructor(private readonly dexieService: DexieService) {}

  add(department: DepartmentDTO) {
    this.dexieService.departmentsStore.add(department);
  }

  delete(id: string) {
    this.dexieService.departmentsStore.delete(id);
  }

  edit(department: DepartmentDTO) {
    this.dexieService.departmentsStore.put(department, department.id);
  }

  findOne(id: string) {
    const department = this.dexieService.departmentsStore.get(id);
    return department;
  }

  findAll() {
    return liveQuery(() => this.dexieService.departmentsStore.toArray());
  }
}
