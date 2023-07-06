import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhongtucComponent } from './phongtuc.component';

describe('PhongtucComponent', () => {
  let component: PhongtucComponent;
  let fixture: ComponentFixture<PhongtucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhongtucComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhongtucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
