import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SoldierDTO } from './shared/domain/DTOs/soldier.dto';
import { DexieService } from './shared/services/dexie.service';
import { MockService } from './shared/services/mock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private readonly dexieService: DexieService) {}

  ngOnInit(): void {
    this.dexieService.loadData();
  }
}
