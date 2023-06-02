import { Component } from '@angular/core';
import { Ingredient } from '../Shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
ingredients:Ingredient[]=[
  new Ingredient('Chana Dal',5),
  new Ingredient('Mug Dal',6),


];
}
