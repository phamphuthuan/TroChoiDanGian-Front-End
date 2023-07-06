import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranchienComponent } from './tranchien.component';

describe('TranchienComponent', () => {
  let component: TranchienComponent;
  let fixture: ComponentFixture<TranchienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranchienComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranchienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
