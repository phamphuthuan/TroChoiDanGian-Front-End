import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideocontentComponent } from './videocontent.component';

describe('VideocontentComponent', () => {
  let component: VideocontentComponent;
  let fixture: ComponentFixture<VideocontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideocontentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideocontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
