import { Component, OnInit } from '@angular/core';

export interface AppLink{
  icon: string;
  link: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true
})
export class FooterComponent implements OnInit {
  iconLink: AppLink[] = [
    {icon: ' fa-brands fa-github', link: 'https://github.com/BryanEspana'},
    {icon: 'fa-brands fa-linkedin', link: 'https://www.linkedin.com/in/bryan-españa-62094a212/'},
    {icon: 'fa-brands fa-instagram', link: 'https://www.instagram.com/bryanesp.exe?igsh=NGIwdjBjOGEwaGph&utm_source=qr'},
  ];
  constructor() { }

  ngOnInit() {
  }

  GoPage(link: string){
    window.open(link, '_blank');
  }

}
