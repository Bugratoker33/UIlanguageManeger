import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule ,Validators } from '@angular/forms';
import { TeacherService } from '../../service/teacher.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-teacher-add',
  standalone: true,
  imports: [ FormsModule ,ReactiveFormsModule  ],
  templateUrl: './teacher-add.component.html',
  styleUrl: './teacher-add.component.css'
})
export class TeacherAddComponent implements OnInit {
  
  teacherAddForm:FormGroup;
  constructor( private formBuilder:FormBuilder ,private toasterService:ToastrService,private teacherService:TeacherService , private ReactiveitaFormModüle:ReactiveFormsModule ){}
  
  ngOnInit(): void {
    this.creatTeacherAddForms();
  }

  creatTeacherAddForms(){
    this.teacherAddForm=this.formBuilder.group({
    //  private String name;
     // private String surname;
     // private int age;
     // private int languageId; name ıd yapabilirim
      name:["",Validators.required],
      age:["",Validators.required],
      languageId:["",Validators.required],
      surname:["",Validators.required]
      

    })
  }
  add(){
   if(this.teacherAddForm.valid){
    let teacherModel=Object.assign({}, this.teacherAddForm.value) 
    this.teacherService.add(teacherModel).subscribe(data=>{
     console.log(data);
      this.toasterService.success("kayıt oluşturuldu ")
    })

   }else{
    this.toasterService.error("Lütfen alanları kontrol ediniz")
   }
   
   
  }

}
