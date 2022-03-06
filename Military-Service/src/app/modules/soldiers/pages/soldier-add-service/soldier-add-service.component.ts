import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SoldierServiceDTO } from 'src/app/shared/domain/DTOs/soldier-service.dto';
import { SoldierDTO } from 'src/app/shared/domain/DTOs/soldier.dto';
import { SoldiersService } from '../../services/soldiers.service';

@Component({
  selector: 'app-soldier-add-service',
  templateUrl: './soldier-add-service.component.html',
})
export class SoldierAddServiceComponent implements OnInit {
  soldier!: SoldierDTO;

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly soldierService: SoldiersService
  ) {}

  ngOnInit(): void {
    const soldierId = this.activatedRoute.snapshot.params.id as string;
    this.soldierService
      .findOne(soldierId)
      .then((soldier) => (this.soldier = soldier as SoldierDTO));
  }

  createSoldierService(service: SoldierServiceDTO) {
    this.soldier.services.push(service);
    this.soldierService.addOrEditIfExists(this.soldier);
  }

  goToSoldiersPage() {
    this.router.navigateByUrl('/soldiers');
  }
}
