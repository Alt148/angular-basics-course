import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'abs-get-joke',
  templateUrl: './get-joke.component.html',
  styleUrls: ['./get-joke.component.scss']
})
export class GetJokeComponent {

  @Output() joke = new EventEmitter();

  getNewJoke() {
    this.joke.emit();
  }

}
