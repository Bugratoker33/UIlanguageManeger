import { Component, OnInit } from '@angular/core';
import { Teacher } from '../../models/teacher';
import { CommonModule, NgFor } from '@angular/common';
import { TeacherService } from '../../service/teacher.service';
import { response } from 'express';
import { VatAddedPipe } from '../../pipes/vat-added.pipe';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [TeacherComponent,NgFor,VatAddedPipe,CommonModule],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css'
})
export class TeacherComponent implements OnInit {
  teachers: Teacher[] = [];
   

  constructor( private teacherService:TeacherService , 
    private toasterService:ToastrService,
    private cartService:CartService) {}

  ngOnInit(): void {
    this.getTeacher();
    
  }

  getTeacher() {
   this.teacherService.getTeacher().subscribe(response =>{
    this.teachers=response;
   })
  }
  addToTeacher(teacher:Teacher){
    
    this.toasterService.success("sepete ekledi" , teacher.languageName)
   this.cartService.addToCart(teacher);
  }
 
}
