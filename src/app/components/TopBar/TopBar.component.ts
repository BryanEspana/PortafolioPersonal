import { Component, OnInit } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-TopBar',
  templateUrl: './TopBar.component.html',
  styleUrls: ['./TopBar.component.scss'],
  imports:[
    AvatarModule,
    AvatarGroupModule,
    ButtonModule
  ],
  standalone: true,
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
