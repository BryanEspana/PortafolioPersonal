import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [ButtonModule, CheckboxModule, FormsModule] 
})
export class AppComponent {
  title = 'portafolioWeb';
  checked: boolean = false;
}
