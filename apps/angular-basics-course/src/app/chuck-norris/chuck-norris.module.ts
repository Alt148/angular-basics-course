import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChuckNorrisComponent } from './chuck-norris.component';
import { ChuckNorrisJokeService } from './chuck-norris-joke.service';
import { GetJokeComponent } from './get-joke/get-joke.component';
import { GetCategoryJokeComponent } from './get-category-joke/get-category-joke.component';



@NgModule({
  declarations: [
    ChuckNorrisComponent,
    GetJokeComponent,
    GetCategoryJokeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ChuckNorrisJokeService
  ],
  exports: [
    ChuckNorrisComponent
  ]
})
export class ChuckNorrisModule { }
