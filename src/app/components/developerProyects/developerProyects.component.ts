import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';

export interface DevelopProyects{
  image: string;
  title: string;
  description: string;
  buttonLink: string;
}

@Component({
  selector: 'app-developerProyects',
  templateUrl: './developerProyects.component.html',
  styleUrls: ['./developerProyects.component.scss'],
  standalone: true,
  imports: [
    ButtonModule
  ]
})
export class DeveloperProyectsComponent implements OnInit {
  CardsProyects: DevelopProyects[] = [
    {
      image: '/assets/proyects/filpro.png',
      title: 'FilPro',
      description: 'Portal de servicios web de facturación electronica.',
      buttonLink: 'https://filpro.infile.com/auth'
    },
    {
      image: '/assets/proyects/filapp.jpg',
      title: 'FilApp',
      description: 'Aplicación movil de servicios de facturación electronica.',
      buttonLink: 'https://apps.apple.com/gt/app/infile-filapp/id6447701126?l=en-GB&platform=iphone'
    },


  ];
  constructor() { }

  ngOnInit() {
  }
  navigateToLink(link: string): void {
    window.open(link, '_blank');
  }
  
}
