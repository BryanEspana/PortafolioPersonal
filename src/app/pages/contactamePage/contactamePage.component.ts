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
  name: string = '';
  email: string = '';
  message: string = '';
  constructor() { }

  ngOnInit() {
  }

  SendEmail() {
    console.log('Name: ' + this.name);
    console.log('Email: ' + this.email);
    console.log('Message: ' + this.message);
  }
}
