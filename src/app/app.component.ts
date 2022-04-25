import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private num1 = 1
  private num2 = 2
  title = 'Angular Store';
  age = 21;
  sum = this.num1 + this.num2;
  random_image = 'https://source.unsplash.com/random'
}
