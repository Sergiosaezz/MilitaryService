import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServiceDTO } from 'src/app/shared/domain/DTOs/service.dto';
import { SoldierServiceDTO } from 'src/app/shared/domain/DTOs/soldier-service.dto';
import { SoldierDTO } from 'src/app/shared/domain/DTOs/soldier.dto';

@Component({
  selector: 'app-soldiers-add-service-form',
  templateUrl: './soldiers-add-service-form.component.html',
})
export class SoldiersAddServiceFormComponent implements OnInit {
  @Input() soldier!: SoldierDTO;
  @Input() services!: ServiceDTO[];
  @Output() serviceToAdd!: EventEmitter<SoldierServiceDTO>;
  @Output() cancelAction!: EventEmitter<any>;

  constructor() {}

  ngOnInit(): void {}
}
