import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BarrackDTO } from 'src/app/shared/domain/DTOs/barrack.dto';
import { BarracksService } from '../../services/barracks.service';

@Component({
  selector: 'app-barracks-home',
  templateUrl: './barracks-home.component.html',
  styleUrls: ['./barracks-home.component.css'],
})
export class BarracksHomeComponent implements OnInit {
  barracks!: BarrackDTO[];
  //barracks!: any

  constructor(private readonly barrackService: BarracksService) {}

  ngOnInit(): void {
    this.barrackService
      .findAll()
      .subscribe((barracksData) => (this.barracks = barracksData));

    //this.barracks = this.barracksService.findAll()
  }
}
