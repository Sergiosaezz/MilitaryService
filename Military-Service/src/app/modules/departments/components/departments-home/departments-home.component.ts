import { Component, OnInit } from '@angular/core';
import { DepartmentDTO } from 'src/app/shared/domain/DTOs/department.dto';
import { DepartmentsService } from '../../services/departments.service';

@Component({
  selector: 'app-departments-home',
  templateUrl: './departments-home.component.html',
  styleUrls: ['./departments-home.component.css'],
})
export class DepartmentsHomeComponent implements OnInit {
  departments!: DepartmentDTO[];

  constructor(private readonly departmentsService: DepartmentsService) {}

  ngOnInit(): void {
    this.departmentsService
      .findAll()
      .subscribe((departmentsData) => (this.departments = departmentsData));
  }
}
