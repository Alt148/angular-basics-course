import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ChuckNorrisJokeService } from '../chuck-norris-joke.service';
import { JokeCategories } from '../get-category-joke/joke-categories';


@Component({
  selector: 'abs-get-joke',
  templateUrl: './get-joke.component.html',
  styleUrls: ['./get-joke.component.scss']
})
export class GetJokeComponent implements OnInit, OnDestroy {

  @Output() joke = new EventEmitter();

  subscription!: Subscription;
  getNewJokeText = 'Get new joke';
  jokeCategory!: BehaviorSubject<JokeCategories | null>;

  constructor(private cnJokeService: ChuckNorrisJokeService) {
    this.jokeCategory = this.cnJokeService.jokeCategory$
  }

  ngOnInit() {
    this.subscription = this.jokeCategory.subscribe(category => {
      if (category) {
        this.getNewJokeText = `Get new ${category} joke`
      } else {
        this.getNewJokeText = 'Get new joke'
      }
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getNewJoke() {
    this.joke.emit();
  }

}
