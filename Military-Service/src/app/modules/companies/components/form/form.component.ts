import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyDTO } from 'src/app/shared/domain/DTOs/company.dto';

@Component({
  selector: 'app-form-company',
  templateUrl: './form-company.component.html',
})
export class FormCompanyComponent implements OnInit {
  @Input() pageType = '';
  @Input() companyValue!: CompanyDTO;
  @Output() dataResult = new EventEmitter<CompanyDTO>();
  @Output() cancelAction = new EventEmitter<any>();
  formControl!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.formControl = this.fb.group({
      activity: [this.companyValue.activity, Validators.required],
    });
  }

  sendData(activity: string) {
    this.companyValue.activity = activity;
    this.dataResult.emit(this.companyValue);
  }

  sendCancelAction() {
    this.cancelAction.emit();
  }
}
