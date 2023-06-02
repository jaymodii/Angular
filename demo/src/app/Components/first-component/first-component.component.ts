import { Component,OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {
todo?:Todo[];
constructor() {
this.todo=[{
  sno:1,
  title:"This is title",
  desc:"This is Description",
  active:true
},
{
  sno:2,
  title:"This is title 2",
  desc:"This is Description 2",
  active:true
},
{
  sno:3,
  title:"This is title 3",
  desc:"This is Description 3",
  active:true
},
]

}
ngOnInit(): void{}
}