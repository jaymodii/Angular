import { Component,OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
ngOnInit(){}

recipes:Recipe[]=[
new Recipe('Sing Bhujiya','Tasty and Crispy','https://www.jagdishfarshan.com/files/cache/catalog/images/Sing_Bhujiya-300x300.jpg')

];

}
