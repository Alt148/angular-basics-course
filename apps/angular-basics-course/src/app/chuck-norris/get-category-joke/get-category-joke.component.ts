import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ChuckNorrisJokeService } from '../chuck-norris-joke.service';
import { categories, JokeCategories } from './joke-categories';


@Component({
  selector: 'abs-get-category-joke',
  templateUrl: './get-category-joke.component.html',
  styleUrls: ['./get-category-joke.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GetCategoryJokeComponent implements OnInit {

  categories = categories;
  jokeCategory!: JokeCategories | null;

  constructor(private chuckNorrisService: ChuckNorrisJokeService) { }

  ngOnInit() {
    this.jokeCategory = this.chuckNorrisService.selectedCategory;
  }

  changeCategory() {
    this.chuckNorrisService.selectedCategory = this.jokeCategory;
  }

  clearCategory() {
    this.jokeCategory = null;
    this.chuckNorrisService.selectedCategory = null;
  }

}
