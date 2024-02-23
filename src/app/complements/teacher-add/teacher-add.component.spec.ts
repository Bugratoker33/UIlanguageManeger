import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherAddComponent } from './teacher-add.component';

describe('TeacherAddComponent', () => {
  let component: TeacherAddComponent;
  let fixture: ComponentFixture<TeacherAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
