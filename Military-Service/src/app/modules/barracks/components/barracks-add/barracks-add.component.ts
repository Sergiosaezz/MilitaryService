import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-barracks-add',
  templateUrl: './barracks-add.component.html',
  styleUrls: ['./barracks-add.component.css'],
})
export class BarracksAddComponent implements OnInit {
  formControl!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.formControl = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
    });
  }
}
