import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { ChuckNorrisModule } from './chuck-norris/chuck-norris.module';
import { HeaderModule } from './header/header.module';
import { routes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HeaderModule,
    ChuckNorrisModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
