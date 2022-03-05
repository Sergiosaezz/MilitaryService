import { Component, OnInit } from '@angular/core';
import { SoldierDTO } from 'src/app/shared/domain/DTOs/soldier.dto';
import { SoldiersService } from '../../services/soldiers.service';

@Component({
  selector: 'app-soldiers-home',
  templateUrl: './soldiers-home.component.html',
  styleUrls: ['./soldiers-home.component.css'],
})
export class SoldiersHomeComponent implements OnInit {
  soldiers!: SoldierDTO[];

  constructor(private readonly soldiersService: SoldiersService) {}

  ngOnInit(): void {
    this.soldiersService
      .findAll()
      .subscribe((soldiersData) => (this.soldiers = soldiersData));
  }
}
