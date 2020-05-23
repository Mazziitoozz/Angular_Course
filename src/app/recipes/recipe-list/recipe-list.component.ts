import { Component, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import { Recipe } from '../recipe.model'; // we search where is our model
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {
  //@Output() recipeWasSelected = new EventEmitter<Recipe>();  due to the service

  // If we use the service we dont need here, just when we init everything, in the constructor, and we will include this data in our service
  // Using the services the info is more centralised

  // recipes: Recipe[] = [ //The only thing we can storage in this porperty is an array of Recipes -->Recipe[] type of data=array, you can write newt to your model the kind of data
  //     new Recipe('Grilled Steak ','Delicious steak in its own sauce','https://c1.wallpaperflare.com/preview/992/474/505/food-meat-recipe-power.jpg'), // we need to pass any data which is in the constructor
  //     new Recipe('Tortilla ','Juicy spanish tortilla','https://lacocinadefrabisa.lavozdegalicia.es/wp-content/uploads/2019/05/tortilla-espa%C3%B1ola.jpg') 
  // ]; 
  recipes: Recipe[];
  subscription:Subscription;
  constructor(private recipeService: RecipeService, private router:Router, private route: ActivatedRoute) {
 //Activated route is to get the current route
   }

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged
      .subscribe(
        (recipes:Recipe [])=>{
          this.recipes = recipes;
        }
      )
    this.recipes = this.recipeService.getRecipes(); // we call our funtion in the service to get a copy of our recipes
  }
  // We remove due to the services
  // onRecipeselected(recipe: Recipe){ //we specify the type of the argument
  //   this.recipeWasSelected.emit(recipe); //we want to emit this argument
  // }
  ngOnDestroy(){
    this.router.navigate(['new'],{relativeTo:this.route});
  }
  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route}); // as it is a button we need to 

  }
}
