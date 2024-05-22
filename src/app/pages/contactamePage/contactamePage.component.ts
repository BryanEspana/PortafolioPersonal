import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'app-contactamePage',
  templateUrl: './contactamePage.component.html',
  styleUrls: ['./contactamePage.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    FloatLabelModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule
  ]
})
export class ContactamePageComponent implements OnInit {
  contact = {
    email: '',
    description: ''
  };
  constructor() { }

  ngOnInit() { }

  onSubmit(contactForm: any) {
    if (contactForm.valid) {
      // El formulario se enviará automáticamente debido a la acción del formulario en HTML
      console.log('Formulario enviado', this.contact);
    } else {
      console.error('Formulario no válido');
    }
  }
}
