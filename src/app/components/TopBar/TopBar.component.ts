import { Component, OnInit } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-TopBar',
  templateUrl: './TopBar.component.html',
  styleUrls: ['./TopBar.component.scss'],
  imports:[
    AvatarModule,
    AvatarGroupModule,
    ButtonModule,
    SelectButtonModule,
    FormsModule
  ],
  standalone: true,
})
export class TopBarComponent implements OnInit {

  stateOptions: any[] = [
    { label: 'English', value: 'english' },
    { label: 'Español', value: 'espaniol' }
  ];

  texts: { [key: string]: string } = {};

  constructor() {
  }

  ngOnInit(): void {
  }



  setTexts(language: string): void {
    if (language === 'english') {
      this.texts = {
        title: 'Welcome',
        description: 'This is a description in English.'
      };
    } else if (language === 'espaniol') {
      this.texts = {
        title: 'Bienvenido',
        description: 'Esta es una descripción en Español.'
      };
    }
  }


  GoGithub(){
    window.open('https://github.com/BryanEspana', '_blank');
  }
}
