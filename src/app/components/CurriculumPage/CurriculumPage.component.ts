import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';

export interface Certifications{
  image: string;
  title: string;
  description: string;
  buttonLink: string;
}

@Component({
  selector: 'app-CurriculumPage',
  templateUrl: './CurriculumPage.component.html',
  styleUrls: ['./CurriculumPage.component.scss'],
  standalone: true,
  imports: [
    ButtonModule
  ]
})
export class CurriculumPageComponent implements OnInit {
  CardsCertifications: Certifications[] = [
    {
      image: '/assets/certifications/2022.png',
      title: 'Astro State - Ganador Guatemala',
      description: 'Aplicación movil desarrollada para que los astronautas realicen registros en el espacio, en el cual fui ganador a nivel nacional',
      buttonLink: 'https://flutterawesome.com/nasa-space-apps-project-with-flutter/'
    },
    {
      image: '/assets/certifications/2023.png',
      title: 'Space Access - Participante',
      description: 'Aplicación Web desarrollada para visualizar planetas en tiempo real con Three.js con APIs de la NASA',
      buttonLink: 'https://www.spaceappschallenge.org/2023/find-a-team/space-access/?tab=project'
    },
    {
      image: '/assets/certifications/flutterFondo.jpg',
      title: 'Certificación de Flutter y Dart',
      description: 'Certificación Completa de Flutter y Dart: La guía completa para crear apps',
      buttonLink: 'https://drive.google.com/file/d/1yPurWxGbjR7SA0tVl3XT9IZomYwFUZKz/view?usp=sharing'
    },
    {
      image: '/assets/certifications/desarrolloweb.png',
      title: 'Certificación de Desarrollo Web Completo ',
      description: 'Certificación Completa de Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL',
      buttonLink: 'https://drive.google.com/file/d/1_AUucUrgHHR3D-8Uk_fEuoD63BIE6OiB/view?usp=sharing'
    },
    {
      image: '/assets/certifications/github.png',
      title: 'Link a Github personal',
      description: 'Navega en mi repositorio de Github para ver mis proyectos y contribuciones',
      buttonLink: 'https://github.com/BryanEspana'
    },
    



  ];
  constructor() { }

  ngOnInit() {
  }
  navigateToLink(link: string): void {
    window.open(link, '_blank');
  }
  
}
