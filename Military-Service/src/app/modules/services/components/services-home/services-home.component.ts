import { Component, OnInit } from '@angular/core';
import { ServiceDTO } from 'src/app/shared/domain/DTOs/service.dto';
import { MilitaryServicesService } from '../../services/military-services.service';

@Component({
  selector: 'app-services-home',
  templateUrl: './services-home.component.html',
  styleUrls: ['./services-home.component.css'],
})
export class ServicesHomeComponent implements OnInit {
  militaryServices!: ServiceDTO[];

  constructor(private readonly servicesService: MilitaryServicesService) {}

  ngOnInit(): void {
    this.servicesService
      .findAll()
      .subscribe((servicesData) => (this.militaryServices = servicesData));
  }
}
