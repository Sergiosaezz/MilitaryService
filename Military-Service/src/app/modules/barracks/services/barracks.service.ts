import { Injectable } from '@angular/core';
import { liveQuery } from 'dexie';
import { Observable } from 'rxjs';
import { BarrackDTO } from 'src/app/shared/domain/DTOs/barrack.dto';
import { DexieService } from 'src/app/shared/services/dexie.service';

@Injectable({
  providedIn: 'root',
})
export class BarracksService {
  constructor(private readonly dexieService: DexieService) {}

  add(barrack: BarrackDTO) {
    this.dexieService.barracksStore.add(barrack);
  }

  delete(id: string) {
    this.dexieService.barracksStore.delete(id);
  }

  addOrEditIfExists(barrack: BarrackDTO) {
    this.dexieService.barracksStore.put(barrack, barrack.id);
  }

  findOne(id: string) {
    const barrack = this.dexieService.barracksStore.get(id);
    return barrack;
  }

  findAll() {
    return liveQuery(() => this.dexieService.barracksStore.toArray());
  }
}
