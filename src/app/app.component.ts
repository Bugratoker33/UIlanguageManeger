import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageComponent } from './complements/language/language.component';
import { NaviComponent } from './complements/navi/navi.component';
import { TeacherComponent } from './complements/teacher/teacher.component';
import { HttpClient } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';
import { TeacherService } from './service/teacher.service';
import { TeacherresponseComponent } from './complements/teacherresponse/teacherresponse.component';
import { CartSummaryComponent } from './complements/cart-summary/cart-summary.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,LanguageComponent , NaviComponent,TeacherComponent,NgIf,NgFor,TeacherresponseComponent , CartSummaryComponent,TeacherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'javaAngular';
}
