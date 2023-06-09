import { Component, OnInit,OnChanges } from '@angular/core';
import { Ingredient } from '../Shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnChanges {
  ingredients!: Ingredient[];

constructor(private shoppingListService:ShoppingListService){}
  ngOnInit(){
this.ingredients=this.shoppingListService.getIngredients();
this.shoppingListService.addedIngredient.subscribe(
  (ingredients:Ingredient[])=>{
    this.ingredients=ingredients;
  }
)
}
ngOnChanges(){
this.shoppingListService.addedIngredient.subscribe(
  (ingredient:Ingredient)=>{
    this.ingredients.push(ingredient);
  }
)

}

}
