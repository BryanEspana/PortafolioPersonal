import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
// For dynamic progressbar demo
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { DeveloperCardsComponent } from '../../components/developerCards/developerCards.component';
import { DeveloperProyectsComponent } from '../../components/developerProyects/developerProyects.component';
import { CurriculumPageComponent } from '../../components/CurriculumPage/CurriculumPage.component';

export interface Skill{
  icon: string;
  name: string;
}

export interface DeveloperCard {
  icon: string;
  title: string;
  description: string;
  basicSkills: Skill[];
  generalSkills: Skill[];
  percentage: number;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    DeveloperCardsComponent,
    DeveloperProyectsComponent,
    CurriculumPageComponent,
    ProgressBarModule,
    ToastModule,
    ButtonModule,
  ]
})
export class HomeComponent implements OnInit {
  languageActual: string = 'espaniol';
  texts: { [key: string]: string } = {};

  constructor() {

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
