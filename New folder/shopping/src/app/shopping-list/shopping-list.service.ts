import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../Shared/ingredients.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients:Ingredient[]=[
  new Ingredient('Chana Dal',5),
  new Ingredient('Mug Dal',6),
];
getIngredients():Ingredient[]{
  return this.ingredients.slice();
}
  addedIngredient=new EventEmitter<Ingredient[]>();
  constructor() { }

addIngredient(ingredient:Ingredient){
  this.ingredients.push(ingredient);
  this.addedIngredient.emit(this.ingredients.slice());
}
}
