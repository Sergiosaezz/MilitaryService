import { Injectable } from '@angular/core';
import { liveQuery } from 'dexie';
import { ServiceDTO } from '../../../shared/domain/DTOs/service.dto';
import { DexieService } from '../../../shared/services/dexie.service';

@Injectable({
  providedIn: 'root',
})
export class MilitaryServicesService {
  constructor(private readonly dexieService: DexieService) {}

  add(service: ServiceDTO) {
    this.dexieService.servicesStore.add(service);
  }

  delete(id: string) {
    this.dexieService.servicesStore.delete(id);
  }

  edit(service: ServiceDTO) {
    this.dexieService.servicesStore.put(service, service.id);
  }

  findOne(id: string) {
    const service = this.dexieService.servicesStore.get(id);
    return service;
  }

  findAll() {
    return liveQuery(() => this.dexieService.servicesStore.toArray());
  }
}
