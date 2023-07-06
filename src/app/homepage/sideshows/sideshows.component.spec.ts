import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideshowsComponent } from './sideshows.component';

describe('SideshowsComponent', () => {
  let component: SideshowsComponent;
  let fixture: ComponentFixture<SideshowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideshowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
