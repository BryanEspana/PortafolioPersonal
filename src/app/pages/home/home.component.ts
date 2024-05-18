import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
// For dynamic progressbar demo
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { DeveloperCardsComponent } from '../../components/developerCards/developerCards.component';
import { DeveloperProyectsComponent } from '../../components/developerProyects/developerProyects.component';

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
    ProgressBarModule,
    ToastModule,
    ButtonModule,
  ]
})
export class HomeComponent implements OnInit {
  languageActual: string = '';
  texts: { [key: string]: string } = {};

  developerCards: DeveloperCard[] = [
    {
      percentage: 100,
      icon: 'fa-solid fa-code',
      title: 'Frontend Developer',
      description: 'Soy un apasionado del desarrollo Frontend, me encanta crear interfaces intuitivas y funcionales.',
      basicSkills: [
        { name: 'HTML/CSS', icon: 'fa-brands fa-html5' },
        { name: 'JavaScript/TypeScript', icon: 'fa-brands fa-js' },
        { name: 'GitFlow', icon: ' fa-brands fa-git'}
      ],
      generalSkills: [
        {  name: 'Angular', icon: 'fa-brands fa-angular'},
        { name: 'React', icon: 'fa-brands fa-react'}
      ],
    },
    {
      percentage: 90,
      icon: 'fa-solid fa-mobile-screen-button',
      title: 'Mobile Developer',
      description: 'I develop mobile applications with the latest technologies and trends in the market.',
      basicSkills: [
        { name: 'IOS', icon: ' fa-brands fa-apple'},
        { name: 'Android', icon: ' fa-brands fa-android'},
        { name: 'Dart', icon: 'fa-solid fa-layer-group' },

        
      ],
      generalSkills: [
        {  name: 'Flutter', icon: 'fa-solid fa-layer-group'},
        { name: 'React-Native', icon: 'fa-brands fa-react'},
        {  name: 'Kotlin', icon: ' fa-brands fa-android'},
      ],
    },
    { 
      percentage: 70,
      icon: 'fa-solid fa-laptop-code',
      title: 'Backend Developer',
      description: 'I develop server-side applications with the latest technologies and trends in the market.',
      basicSkills: [
        { name: 'Java', icon: 'fa-brands fa-java' },
        { name: 'JavaScript', icon: 'fa-brands fa-js' },
        { name: 'PosgreSQL/MySQL', icon: 'fa-solid fa-database'},
        { name: 'MongoDB/Neo4j', icon: 'fa-solid fa-database'}
      ],
      generalSkills: [
        {  name: 'Node JS', icon: 'fa-brands fa-node'},
        { name: 'Express JS', icon: 'fa-brands fa-react'}
      ],
    },

  ];
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
