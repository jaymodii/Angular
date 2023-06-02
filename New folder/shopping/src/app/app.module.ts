import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './Header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';

import { RecipeListComponent } from './Recipes/recipe-list/recipe-list.component';
import { RecipesComponent } from './Recipes/recipes.component';
import { RecipeDetailComponent } from './Recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './Recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
   RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
