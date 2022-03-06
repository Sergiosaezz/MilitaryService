import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SoldierDTO } from 'src/app/shared/domain/DTOs/soldier.dto';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { SoldiersService } from '../../services/soldiers.service';

@Component({
  selector: 'app-soldiers-home',
  templateUrl: './soldiers-home.component.html',
  styleUrls: ['./soldiers-home.component.css'],
})
export class SoldiersHomeComponent implements OnInit {
  soldiers!: SoldierDTO[];

  constructor(
    private readonly soldiersService: SoldiersService,
    private readonly deleteDialog: MatDialog,
    private snackMsg: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.soldiersService
      .findAll()
      .subscribe((soldiersData) => (this.soldiers = soldiersData));
  }

  deleteSoldier(soldier: SoldierDTO) {
    const dialogRef = this.deleteDialog
      .open(DialogComponent, {
        width: '350px',
        data: soldier,
      })
      .afterClosed()
      .subscribe((confirm) => {
        if (confirm) {
          this.soldiersService.delete(soldier.id);
          this.snackMsg.open('Soldado eliminado', undefined, {
            duration: 1000,
          });
        }
      });
  }
}
