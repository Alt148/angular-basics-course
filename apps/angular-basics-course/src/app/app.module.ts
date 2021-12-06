import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChuckNorrisModule } from './chuck-norris/chuck-norris.module';
import { HeaderModule } from './header/header.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HeaderModule,
    ChuckNorrisModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
