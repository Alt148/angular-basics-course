import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChuckNorrisJokeResponse } from './chuck-norris-joke';
import { delay } from 'rxjs';
import { JokeCategories } from './get-category-joke/joke-categories';


@Injectable()
export class ChuckNorrisJokeService {

  private _selectedCategory: JokeCategories | null = null;

  constructor(private httpService: HttpClient) { }

  get selectedCategory() {
    return this._selectedCategory;
  }

  set selectedCategory(category: JokeCategories | null) {
    if (category) {
      this._selectedCategory = category;
    } else {
      this._selectedCategory = null;
    }
  }

  getJoke() {

    let url = `https://api.chucknorris.io/jokes/random`;

    if (this._selectedCategory) {
      url = `${url}?category=${this._selectedCategory}`;
    }
    return this.httpService.get<ChuckNorrisJokeResponse>(url).pipe(
      delay(1000)
    );
  }

}
