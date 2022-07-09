import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenApplicantComponent } from './open-applicant.component';

describe('OpenApplicantComponent', () => {
  let component: OpenApplicantComponent;
  let fixture: ComponentFixture<OpenApplicantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenApplicantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
