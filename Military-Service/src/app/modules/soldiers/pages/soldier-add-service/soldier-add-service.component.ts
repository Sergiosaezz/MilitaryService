import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MilitaryServicesService } from 'src/app/modules/military-services/services/military-services.service';
import { ServiceDTO } from 'src/app/shared/domain/DTOs/service.dto';
import { SoldierServiceDTO } from 'src/app/shared/domain/DTOs/soldier-service.dto';
import { SoldierDTO } from 'src/app/shared/domain/DTOs/soldier.dto';
import { SoldiersService } from '../../services/soldiers.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-soldier-add-service',
  templateUrl: './soldier-add-service.component.html',
})
export class SoldierAddServiceComponent implements OnInit {
  soldier!: SoldierDTO;
  services!: ServiceDTO[];

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly soldierService: SoldiersService,
    private readonly servicesService: MilitaryServicesService
  ) {}

  ngOnInit(): void {
    const soldierId = this.activatedRoute.snapshot.params.id as string;
    this.soldierService
      .findOne(soldierId)
      .then((soldier) => (this.soldier = soldier as SoldierDTO));

    this.servicesService
      .findAll()
      .subscribe((servicesData) => (this.services = servicesData));
  }

  async createSoldierService(service: SoldierServiceDTO) {
    service.id = uuid();
    await this.servicesService
      .findOne(service.serviceId)
      .then(
        (serviceData) =>
          (service.description = serviceData?.description as string)
      )
      .then(() => {
        this.soldier.services = [service, ...this.soldier.services];
        this.soldierService.addOrEditIfExists(this.soldier);
        this.goToSoldiersPage();
      });
  }

  goToSoldiersPage() {
    this.router.navigateByUrl('/soldiers');
  }
}
