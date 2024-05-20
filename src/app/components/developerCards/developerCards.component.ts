import { Component, OnInit } from '@angular/core';
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
  selector: 'app-developerCards',
  templateUrl: './developerCards.component.html',
  styleUrls: ['./developerCards.component.scss'],
  standalone: true,
  
})
export class DeveloperCardsComponent implements OnInit {
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
      description: 'Desarrollo aplicaciones móviles con las últimas tecnologías y tendencias del mercado, Flutter es uno de mis lenguajes favoritos y amo programar aplicaciones moviles',
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
      description: 'Desarrollo aplicaciones del lado del servidor tecnologías conocidas como Node.js, Express, MongoDB, Firebase, etc.',
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
  constructor() { }

  ngOnInit() {
  }

}
