import { Component, OnInit } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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
  isDarkMode: boolean = false;
  stateOptions: any[] = [
    { label: 'English', value: 'english' },
    { label: 'Español', value: 'espaniol' }
  ];

  texts: { [key: string]: string } = {};

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {

    this.loadTheme();
    console.log("darkmode: " + this.isDarkMode);
  }

  onLanguageChange(): void {
    window.location.reload();
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
  GoContactPage(){
    this.router.navigate(['/contact']);
  }
  GoToMenuPage(){
    this.router.navigate(['']);
  }

  toggleDarkMode(){
    console.log("Toggle dark mode: " + this.isDarkMode)
    this.applyTheme();
  }
  loadTheme() {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'true') {
      this.isDarkMode = true;
      console.log("dark mode: " + darkMode);
    } else {
      this.isDarkMode = false;
      console.log("dark mode: " + darkMode);
    }
    this.applyTheme();
  }
  applyTheme() {
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'false');
    }
  }
}
