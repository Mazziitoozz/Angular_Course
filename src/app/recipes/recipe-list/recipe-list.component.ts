import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Recipe } from '../recipe.model'; // we search where is our model
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  //@Output() recipeWasSelected = new EventEmitter<Recipe>();  due to the service

  // If we use the service we dont need here, just when we init everything, in the constructor, and we will include this data in our service
  // Using the services the info is more centralised

  // recipes: Recipe[] = [ //The only thing we can storage in this porperty is an array of Recipes -->Recipe[] type of data=array, you can write newt to your model the kind of data
  //     new Recipe('Grilled Steak ','Delicious steak in its own sauce','https://c1.wallpaperflare.com/preview/992/474/505/food-meat-recipe-power.jpg'), // we need to pass any data which is in the constructor
  //     new Recipe('Tortilla ','Juicy spanish tortilla','https://lacocinadefrabisa.lavozdegalicia.es/wp-content/uploads/2019/05/tortilla-espa%C3%B1ola.jpg') 
  // ]; 
  recipes: Recipe[];
  constructor(private recipeService: RecipeService) {

   }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes(); // we call our funtion in the service to get a copy of our recipes
  }
  // We remove due to the services
  // onRecipeselected(recipe: Recipe){ //we specify the type of the argument
  //   this.recipeWasSelected.emit(recipe); //we want to emit this argument
  // }
}
