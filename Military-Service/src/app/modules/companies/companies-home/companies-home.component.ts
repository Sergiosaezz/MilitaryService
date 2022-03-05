import { Component, OnInit } from '@angular/core';
import { CompanyDTO } from 'src/app/shared/domain/DTOs/company.dto';
import { CompaniesService } from 'src/app/modules/companies/services/companies.service';
import { v4 as uuidv4 } from 'uuid';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../components/dialog/dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    this.formType = 'Agregar';
    this.companyToEdit = { id: '', activity: '' };
    setTimeout(() => {
      this.openForm();
    }, 1);
  }

  activateEditForm(idCompany: string) {
    this.closeForm();
    this.companiesService
      .findOne(idCompany)
      .then((company) => (this.companyToEdit = company as CompanyDTO))
      .then(() => {
        this.formType = 'Editar';
        this.openForm();
      });
  }

  addOrUpdateCompany(company: CompanyDTO) {
    if (this.formType === 'Agregar') {
      company.id = uuidv4();
      this.companiesService.add(company);
    }
    if (this.formType === 'Editar') {
      this.companiesService.edit(company);
    }
    this.closeForm();
  }

  deleteCompany(company: CompanyDTO) {
    const dialogRef = this.deleteDialog
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
    this.isFormActive = true;
  }

  closeForm() {
    this.isFormActive = false;
  }
}
