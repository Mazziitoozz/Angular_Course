import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>()
    private recipes: Recipe[] = [ //The only thing we can storage in this porperty is an array of Recipes -->Recipe[] type of data=array, you can write newt to your model the kind of data
      new Recipe('Grilled Steak ',
      'Delicious steak in its own sauce',
      'https://c1.wallpaperflare.com/preview/992/474/505/food-meat-recipe-power.jpg',
      [ new Ingredient('Meat',1,'https://c1.wallpaperflare.com/preview/992/474/505/food-meat-recipe-power.jpg')]), // we need to pass any data which is in the constructor
      
      new Recipe('Tortilla ',
      'Juicy spanish tortilla',
      'https://lacocinadefrabisa.lavozdegalicia.es/wp-content/uploads/2019/05/tortilla-espa%C3%B1ola.jpg',
      [
        new Ingredient('Eggs',5,'https://www.collinsdictionary.com/images/thumb/eggs_110803370_250.jpg?version=4.0.61'),
        new Ingredient('Potatos',3,'https://www.irishtimes.com/polopoly_fs/1.3967277.1564062363!/image/image.jpg_gen/derivatives/box_620_330/image.jpg'),
        new Ingredient('Onions',1,'https://freshpoint.com/wp-content/uploads/commodity-yellow-onion.jpg'),
      ]) 
  ]; 
  getRecipes(){
      return this.recipes.slice(); // get a copy of our recipes
  }
}