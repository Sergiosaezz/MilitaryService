import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceDTO } from 'src/app/shared/domain/DTOs/service.dto';

@Component({
  selector: 'app-form-services',
  templateUrl: './form-services.component.html',
})
export class FormServicesComponent implements OnInit {
  @Input() pageType = '';
  @Input() serviceValue!: ServiceDTO;
  @Output() dataResult = new EventEmitter<ServiceDTO>();
  @Output() cancelAction = new EventEmitter<any>();
  formControl!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.formControl = this.fb.group({
      description: [this.serviceValue.description, Validators.required],
    });
  }

  sendData(description: string) {
    this.serviceValue.description = description;
    this.dataResult.emit(this.serviceValue);
  }

  sendCancelAction() {
    this.cancelAction.emit();
  }
}
