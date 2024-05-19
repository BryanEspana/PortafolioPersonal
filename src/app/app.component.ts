import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './components/TopBar/TopBar.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule, 
    TopBarComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Bryan España - Portafolio';
  value: string = 'en';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use(this.value);
  }

  onLanguageChange() {
    this.translate.use(this.value);
  }
}
