import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldierAddServiceComponent } from './soldier-add-service.component';

describe('SoldierAddServiceComponent', () => {
  let component: SoldierAddServiceComponent;
  let fixture: ComponentFixture<SoldierAddServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoldierAddServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoldierAddServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
