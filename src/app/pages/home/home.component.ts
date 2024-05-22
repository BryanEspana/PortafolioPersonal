import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
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


  constructor(
    private el: ElementRef, 
    private renderer: Renderer2) {
  }
  
  ngOnInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(entry.target, 'animate__animated');
          this.renderer.addClass(entry.target, 'animate__fadeIn');
          observer.unobserve(entry.target);
        }
      });
    });

    const elements = this.el.nativeElement.querySelectorAll('.animate-on-scroll');
    elements.forEach((element: Element) => observer.observe(element));
  
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
        description: 'Estudiante de la Universidad del Valle de Guatemala.'
      };
    }
  }

  
}
