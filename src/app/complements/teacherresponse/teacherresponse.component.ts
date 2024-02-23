import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TeacherresponseService } from '../../service/teacherresponse.service';
import { TeachersResponse } from '../../models/TeacherResponeModel';
import { NgFor, NgIf } from '@angular/common';
import { NgModel } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-teacherresponse',
  standalone: true,
  imports: [NgFor,NgIf ,RouterLink],
  templateUrl: './teacherresponse.component.html',
  styleUrl: './teacherresponse.component.css'
})
export class TeacherresponseComponent implements OnInit {
  teacherResponse: TeachersResponse[]=[] ;

  
  constructor(private teacherService: TeacherresponseService, private route: ActivatedRoute ,private toasterService:ToastrService) {}

  ngOnInit(): void {
    this.getTeacherList();
    
  }

  getTeacherList() {
    this.teacherService.getTeacherById().subscribe(response => {
      this.teacherResponse = response;
      console.log("Çaşışiür")
    });
  }
}