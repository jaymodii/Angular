import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-angular-application';
  name='Jay';
  allow:boolean=false;
  flag:boolean=false;

 logs:Date[]=[];
  constructor(){

  }
onClick(){
  this.flag=!this.flag;

  // this.logs.push(this.logs.length+1);
  this.logs.push(new Date())
}

}
