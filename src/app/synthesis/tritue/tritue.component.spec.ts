import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TritueComponent } from './tritue.component';

describe('TritueComponent', () => {
  let component: TritueComponent;
  let fixture: ComponentFixture<TritueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TritueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TritueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
