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
  @Output() serviceToAdd = new EventEmitter<SoldierServiceDTO>();
  @Output() cancelAction = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  cancel() {
    this.cancelAction.emit();
  }

  sendData(soldierService: SoldierServiceDTO) {
    this.serviceToAdd.emit(soldierService);
  }
}
