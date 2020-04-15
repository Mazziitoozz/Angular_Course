import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]  // this service affects all recipes
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(private recipeService: RecipeService) { } // we need inject the service

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(( recipe: Recipe) =>{ // we defice Recipe as a input in our EventEmitter
      this.selectedRecipe=recipe;
    }

    );
  }

}
