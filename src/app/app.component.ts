import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './components/TopBar/TopBar.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    RouterModule, 
    TopBarComponent],
})
export class AppComponent {
  title = 'portafolioWeb';
}
