import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynthesisComponent } from './synthesis.component';

describe('SynthesisComponent', () => {
  let component: SynthesisComponent;
  let fixture: ComponentFixture<SynthesisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SynthesisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SynthesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
