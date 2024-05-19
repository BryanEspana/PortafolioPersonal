import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './components/TopBar/TopBar.component';
import { FooterComponent } from './components/footer/footer.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    RouterModule, 
    TopBarComponent,
    FooterComponent
  ],
})
export class AppComponent {
  title = 'portafolioWeb';
}
