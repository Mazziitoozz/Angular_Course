import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();// just to add the new ingredient in the copy
    private ingredients: Ingredient[]=[
        new Ingredient('Potatoes',4,'https://www.irishtimes.com/polopoly_fs/1.3967277.1564062363!/image/image.jpg_gen/derivatives/box_620_330/image.jpg'),
        new Ingredient('Eggs',6,'https://www.collinsdictionary.com/images/thumb/eggs_110803370_250.jpg?version=4.0.61'),
        new Ingredient('Onions',2,'https://freshpoint.com/wp-content/uploads/commodity-yellow-onion.jpg'),
      ];

      getIngredients(){
        return this.ingredients.slice(); // get a copy of our ingredients. so if we add a new ingredient we wont be able to see with slice
    }
    
    addIngredient(ingredient:Ingredient){
     this.ingredients.push(ingredient);
     this.ingredientsChanged.emit(this.ingredients.slice());
    }
}