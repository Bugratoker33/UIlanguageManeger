import { Routes } from '@angular/router';

import { TeacherComponent } from './complements/teacher/teacher.component';
import { TeacherresponseComponent } from './complements/teacherresponse/teacherresponse.component';
import { TeacherAddComponent } from './complements/teacher-add/teacher-add.component';


export const routes: Routes = [
    {path:"",pathMatch:"full",component : TeacherComponent},
    {path:"teacher" , component : TeacherComponent},
    { path: "teacherLanguage", component: TeacherresponseComponent },
    { path: "teacher/add" , component:TeacherAddComponent},
]
