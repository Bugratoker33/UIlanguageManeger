import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherresponseComponent } from './teacherresponse.component';

describe('TeacherresponseComponent', () => {
  let component: TeacherresponseComponent;
  let fixture: ComponentFixture<TeacherresponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherresponseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherresponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
