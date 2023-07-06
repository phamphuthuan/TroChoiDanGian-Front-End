import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuyenaiComponent } from './luyenai.component';

describe('LuyenaiComponent', () => {
  let component: LuyenaiComponent;
  let fixture: ComponentFixture<LuyenaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuyenaiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuyenaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
