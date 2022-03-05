import { Component, OnInit } from '@angular/core';
import { CompanyDTO } from 'src/app/shared/domain/DTOs/company.dto';
import { CompaniesService } from 'src/app/modules/companies/services/companies.service';
import { v4 as uuidv4 } from 'uuid';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../components/dialog/dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ADD_FORM, EDIT_FORM } from 'src/app/common/constants';

@Component({
  selector: 'app-companies-home',
  templateUrl: './companies-home.component.html',
})
export class CompaniesHomeComponent implements OnInit {
  companies!: CompanyDTO[];
  companyToEdit!: CompanyDTO;
  formType = '';
  isFormActive = false;

  constructor(
    private readonly companiesService: CompaniesService,
    private readonly deleteDialog: MatDialog,
    private snackMsg: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.companiesService
      .findAll()
      .subscribe((companiesData) => (this.companies = companiesData));
  }

  activateAddForm() {
    this.closeForm();
    this.formType = ADD_FORM;
    this.companyToEdit = { id: '', activity: '' };
    this.openForm();
  }

  activateEditForm(company: CompanyDTO) {
    this.closeForm();
    this.formType = EDIT_FORM;
    this.companyToEdit = company;
    this.openForm();
  }

  addOrUpdateCompany(company: CompanyDTO) {
    if (this.formType === ADD_FORM) company.id = uuidv4();
    this.companiesService.addOrEditIfExist(company);
    this.closeForm();
  }

  deleteCompany(company: CompanyDTO) {
    this.deleteDialog
      .open(DialogComponent, {
        width: '350px',
        data: company,
      })
      .afterClosed()
      .subscribe((confirm) => {
        if (confirm) {
          this.companiesService.delete(company.id);
          this.snackMsg.open('Compañia Eliminada', undefined, {
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
