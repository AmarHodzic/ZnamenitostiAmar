import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZnamenitostPreviewAdminComponent } from './znamenitost-preview-admin.component';

describe('ZnamenitostPreviewAdminComponent', () => {
  let component: ZnamenitostPreviewAdminComponent;
  let fixture: ComponentFixture<ZnamenitostPreviewAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZnamenitostPreviewAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZnamenitostPreviewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
