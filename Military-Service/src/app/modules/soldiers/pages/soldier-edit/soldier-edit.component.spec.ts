import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldierEditComponent } from './soldier-edit.component';

describe('SoldierEditComponent', () => {
  let component: SoldierEditComponent;
  let fixture: ComponentFixture<SoldierEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoldierEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoldierEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
