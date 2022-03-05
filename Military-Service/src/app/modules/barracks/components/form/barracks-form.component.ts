import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BarrackDTO } from 'src/app/shared/domain/DTOs/barrack.dto';

@Component({
  selector: 'app-barracks-form',
  templateUrl: './barracks-form.component.html',
  styleUrls: ['./barracks-form.component.css'],
})
export class BarracksFormComponent implements OnInit {
  @Input() pageType = '';
  @Input() barrackValue!: BarrackDTO;
  @Output() dataResult = new EventEmitter<BarrackDTO>();
  @Output() cancelAction = new EventEmitter<any>();
  formControl!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.formControl = this.fb.group({
      name: [this.barrackValue.name, Validators.required],
      location: [this.barrackValue.location, Validators.required],
    });
  }

  sendData(location: string, name: string) {
    this.barrackValue.location = location;
    this.barrackValue.name = name;
    this.dataResult.emit(this.barrackValue);
  }

  sendCancelAction() {
    this.cancelAction.emit();
  }
}
