import { Injectable } from '@angular/core';
import { liveQuery } from 'dexie';
import { SoldierDTO } from '../domain/DTOs/soldier.dto';
import { DexieService } from './dexie.service';

@Injectable({
  providedIn: 'root',
})
export class SoldiersService {
  constructor(private readonly dexieService: DexieService) {}

  add(soldier: SoldierDTO) {
    this.dexieService.soldiersStore.add(soldier);
  }

  delete(id: string) {
    this.dexieService.soldiersStore.delete(id);
  }

  edit(soldier: SoldierDTO) {
    this.dexieService.soldiersStore.put(soldier, soldier.id);
  }

  findOne(id: string) {
    const soldier = this.dexieService.soldiersStore.get(id);
    return soldier;
  }

  findAll() {
    return liveQuery(() => this.dexieService.soldiersStore.toArray());
  }
}
