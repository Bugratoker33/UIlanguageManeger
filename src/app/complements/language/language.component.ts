import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../service/language.service';
import { response } from 'express';
import { Language } from '../../models/language';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-language',
  standalone: true,
  imports: [NgFor ,NgIf],
  templateUrl: './language.component.html',
  styleUrl: './language.component.css'
})
export class LanguageComponent implements OnInit {

  languages: Language[] = [];
  curentLanguga:Language; // ben başlatmayacağım interfacin referansından yararlandcağım demek :
  constructor(private languageService:LanguageService ){

  }
  ngOnInit(): void {
  this.GetTeacher();
 
  }

  GetTeacher(){
    this.languageService.getTeacher().subscribe(response =>{
      this.languages=response;
    })
  }
  setCurrentLanguage(language:Language){
   this.curentLanguga=language;
  }
}
