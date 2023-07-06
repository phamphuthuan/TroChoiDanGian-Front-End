import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NghenghiepComponent } from './nghenghiep.component';

describe('NghenghiepComponent', () => {
  let component: NghenghiepComponent;
  let fixture: ComponentFixture<NghenghiepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NghenghiepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NghenghiepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
