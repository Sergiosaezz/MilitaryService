import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ADD_FORM, EDIT_FORM } from 'src/app/common/constants';
import { ServiceDTO } from 'src/app/shared/domain/DTOs/service.dto';
import { DialogComponent } from '../components/dialog/dialog.component';
import { MilitaryServicesService } from '../services/military-services.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-services-home',
  templateUrl: './services-home.component.html',
})
export class ServicesHomeComponent implements OnInit {
  services!: ServiceDTO[];
  serviceToEdit!: ServiceDTO;
  formType = '';
  isFormActive = false;

  constructor(
    private readonly militaryService: MilitaryServicesService,
    private readonly deleteDialog: MatDialog,
    private snackMsg: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.militaryService
      .findAll()
      .subscribe((departmentsData) => (this.services = departmentsData));
  }

  activateAddForm() {
    this.closeForm();
    this.formType = ADD_FORM;
    this.serviceToEdit = { id: '', description: '' };
    this.openForm();
  }

  activateEditForm(department: ServiceDTO) {
    this.closeForm();
    this.formType = EDIT_FORM;
    this.serviceToEdit = department;
    this.openForm();
  }

  addOrUpdateService(company: ServiceDTO) {
    if (this.formType === ADD_FORM) company.id = uuidv4();
    this.militaryService.addOrEditIfExists(company);
    this.closeForm();
  }

  deleteDepartment(company: ServiceDTO) {
    const dialogRef = this.deleteDialog
      .open(DialogComponent, {
        width: '350px',
        data: company,
      })
      .afterClosed()
      .subscribe((confirm) => {
        if (confirm) {
          this.militaryService.delete(company.id);
          this.snackMsg.open('Cuerpo eliminado', undefined, {
            duration: 1000,
          });
        }
      });
  }

  openForm() {
    setTimeout(() => {
      this.isFormActive = true;
    }, 1);
  }

  closeForm() {
    this.isFormActive = false;
  }
}
