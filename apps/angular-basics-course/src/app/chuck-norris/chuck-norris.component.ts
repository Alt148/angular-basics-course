import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChuckNorrisJokeResponse } from './chuck-norris-joke';
import { ChuckNorrisJokeService } from './chuck-norris-joke.service';


@Component({
  selector: 'abs-chuck-norris',
  templateUrl: './chuck-norris.component.html',
  styleUrls: ['./chuck-norris.component.scss']
})
export class ChuckNorrisComponent implements OnInit {

  jokeResponse!: Observable<ChuckNorrisJokeResponse>;

  constructor(private chuckNorrisService: ChuckNorrisJokeService) { }

  ngOnInit(): void {
    this.jokeResponse = this.chuckNorrisService.getJoke();
  }

  getRandomJoke(): void {
    this.jokeResponse = this.chuckNorrisService.getJoke();
  }

}
