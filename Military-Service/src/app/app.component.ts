import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SoldierDTO } from './shared/domain/DTOs/soldier.dto';
import { MockService } from './shared/services/mock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  soldiers = new Observable<SoldierDTO[]>();

  constructor(private readonly mockService: MockService) {}

  ngOnInit(): void {
    this.soldiers = this.mockService.loadSoldiers();
  }
}
