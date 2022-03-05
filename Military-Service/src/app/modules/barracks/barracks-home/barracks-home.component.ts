import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ADD_FORM, EDIT_FORM } from 'src/app/common/constants';
import { BarrackDTO } from 'src/app/shared/domain/DTOs/barrack.dto';
import { BarracksService } from '../services/barracks.service';
import { v4 as uuidv4 } from 'uuid';
import { DialogComponent } from '../components/dialog/dialog.component';

@Component({
  selector: 'app-barracks-home',
  templateUrl: './barracks-home.component.html',
  styleUrls: ['./barracks-home.component.css'],
})
export class BarracksHomeComponent implements OnInit {
  barracks!: BarrackDTO[];
  barrackToEdit!: BarrackDTO;
  formType = '';
  isFormActive = false;

  constructor(
    private readonly barrackService: BarracksService,
    private readonly deleteDialog: MatDialog,
    private snackMsg: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.barrackService
      .findAll()
      .subscribe((barracksData) => (this.barracks = barracksData));
  }

  activateAddForm() {
    this.closeForm();
    this.formType = ADD_FORM;
    this.barrackToEdit = { id: '', name: '', location: '' };
    this.openForm();
  }

  activateEditForm(barrack: BarrackDTO) {
    this.closeForm();
    this.formType = EDIT_FORM;
    this.barrackToEdit = barrack;
    this.openForm();
  }

  openForm() {
    setTimeout(() => {
      this.isFormActive = true;
    }, 1);
  }

  closeForm() {
    this.isFormActive = false;
  }

  addOrUpdateBarrack(barrack: BarrackDTO) {
    if (this.formType === ADD_FORM) barrack.id = uuidv4();
    this.barrackService.addOrEditIfExists(barrack);
    this.closeForm();
  }

  deleteBarrack(barrack: BarrackDTO) {
    this.deleteDialog
      .open(DialogComponent, {
        width: '350px',
        data: barrack,
      })
      .afterClosed()
      .subscribe((confirm) => {
        if (confirm) {
          this.barrackService.delete(barrack.id);
          this.snackMsg.open('Cuartel Eliminado', undefined, {
            duration: 1000,
          });
        }
      });
  }
}
