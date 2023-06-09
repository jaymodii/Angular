import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../Shared/ingredients.model';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected=new EventEmitter<Recipe>();
 private recipes:Recipe[]=[
    new Recipe('Sing Bhujiya','Tasty and Crispy','https://www.jagdishfarshan.com/files/cache/catalog/images/Sing_Bhujiya-300x300.jpg',
    [new Ingredient('Sing',500),
    new Ingredient('Bhujiya',100),
    new Ingredient('Onion',5)
    ])
  ];
    getRecipes(){
      return this.recipes.slice();
    }
  constructor() { }
}
