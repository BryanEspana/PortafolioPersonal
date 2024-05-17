import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  languageActual: string = '';
  texts: { [key: string]: string } = {};

  constructor() {
    this.languageActual = localStorage.getItem('selectedLanguage') || 'espaniol';

  }
  
  ngOnInit() {
    this.setTexts(this.languageActual);
  }

  setTexts(languageActual: string): void {
    if (languageActual === 'english') {
      this.texts = {
        title: 'Frontend Developer and App Development',
        description: 'I love designing web and mobile applications with the latest technologies and market trends.'
      };
    } else if (languageActual === 'espaniol') {
      this.texts = {
        title: 'Desarrollador Frontend y Desarrollador de Aplicaciones Moviles',
        description: 'Me encanta diseñar aplicaciones webs y moviles con las ultimas tecnologias y tendencias del mercado.'
      };
    }
  }

  
}
