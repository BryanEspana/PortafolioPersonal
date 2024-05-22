import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactamePageComponent } from './pages/contactamePage/contactamePage.component';

export const routes: Routes = [
    { path: '', component:HomeComponent, pathMatch: 'full' },
    { path:'contact', component: ContactamePageComponent}
];
