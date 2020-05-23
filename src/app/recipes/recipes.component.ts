import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  //providers: [RecipeService]  // this service affects all recipes better includes in module
})
export class RecipesComponent implements OnInit {
  constructor() { } // we need inject the service

  ngOnInit(): void {
    
  }

}
