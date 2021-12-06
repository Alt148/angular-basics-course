import { Routes } from '@angular/router';
import { ChuckNorrisComponent } from './chuck-norris/chuck-norris.component';
import { IntroComponent } from './intro/intro.component';

export const routes: Routes = [
  { path: 'jokes', component: ChuckNorrisComponent },
  { path: '', component: IntroComponent, },
];
