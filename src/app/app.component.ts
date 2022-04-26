import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private num1 = 1;
  private num2 = 2;
  title = 'Angular Store';
  age = 21;
  sum = this.num1 + this.num2;
  random_image = 'https://source.unsplash.com/random';
  btnStatus = true; //default true
  data = {
    name: 'Dani',
    age: 50,
  };
  positionScrollDiv = 0;

  toggleButton() {
    this.btnStatus = !this.btnStatus;
  }

  increaseAge() {
    this.data.age += 1;
  }

  decreaseAge() {
    this.data.age -= 1;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    this.positionScrollDiv = element.scrollTop
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.data.name = element.value;
  }
}
