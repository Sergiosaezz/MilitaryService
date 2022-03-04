<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SoldierDTO } from './shared/domain/DTOs/soldier.dto';
import { MockService } from './shared/services/mock.service';
=======
import { Component } from '@angular/core';
>>>>>>> 06682982389182672a7c842cd1dba3ba70a124cd

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
<<<<<<< HEAD
export class AppComponent implements OnInit {
  soldiers = new Observable<SoldierDTO[]>();

  constructor(private readonly mockService: MockService) {}

  ngOnInit(): void {
    this.soldiers = this.mockService.loadSoldiers();
  }
=======
export class AppComponent {
  constructor() {}
>>>>>>> 06682982389182672a7c842cd1dba3ba70a124cd
}
