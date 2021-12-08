import { Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';

export const routes: Routes = [
  {
    path: 'jokes',
    loadChildren: () => import('./chuck-norris/chuck-norris.module').then(m => m.ChuckNorrisModule)
  },
  { path: '', component: IntroComponent, },
];
