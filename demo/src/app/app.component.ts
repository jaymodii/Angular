import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'To do App';
  constructor(){
    setTimeout(() => {
      this.title="Keeping your todos";
    }, 3000);
  }
}
