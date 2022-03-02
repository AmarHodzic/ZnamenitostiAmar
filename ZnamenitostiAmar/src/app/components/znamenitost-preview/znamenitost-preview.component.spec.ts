import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZnamenitostPreviewComponent } from './znamenitost-preview.component';

describe('ZnamenitostPreviewComponent', () => {
  let component: ZnamenitostPreviewComponent;
  let fixture: ComponentFixture<ZnamenitostPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZnamenitostPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZnamenitostPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
