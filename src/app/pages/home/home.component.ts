import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

export interface DeveloperCard {
  icon: string;
  title: string;
  description: string;
  basicSkills: string[];
  generalSkills: string[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
})
export class HomeComponent implements OnInit {
  languageActual: string = '';
  texts: { [key: string]: string } = {};

  developerCards: DeveloperCard[] = [
    {
      icon: 'pi pi-code',
      title: 'Frontend Developer',
      description: 'Soy un apasionado del desarrollo Frontend, me encanta crear interfaces intuitivas y funcionales.',
      basicSkills: ['HTML/  CSS', 'JavaScript', 'GitFlow'],
      generalSkills: ['Angular', 'React']
    },
    {
      icon: 'pi pi-code',
      title: 'Mobile Developer',
      description: 'I develop mobile applications with the latest technologies and trends in the market.',
      basicSkills: ['Java', 'Kotlin', 'Swift'],
      generalSkills: ['Ionic', 'React Native', 'Flutter']
    },
    {
      icon: 'pi pi-cog',
      title: 'Backend Developer',
      description: 'I develop server-side applications with the latest technologies and trends in the market.',
      basicSkills: ['Node.js', 'Python', 'Java'],
      generalSkills: ['Express', 'Django', 'Spring Boot']
    }
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
