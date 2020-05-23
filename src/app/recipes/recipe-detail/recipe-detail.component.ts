import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  //Without routing@Input() recipe:Recipe; // when you use input you can pass the arguemnt to the parent(recipe.component) and use like that    
   //<app-recipe-detail *ngIf="selectedRecipe;else infoText" [recipe]="selectedRecipe">
  recipe:Recipe
  id:number;
  constructor(private recipeService: RecipeService, 
              private route:ActivatedRoute,
              private router: Router) { } // we need to fetch the id from the route

  ngOnInit(): void {
    //const id = this.route.snapshot.params['id'] // we get the id from the route
    this.route.params   // it is better with the observable because we can react with any changes in the id
      .subscribe(
        (params: Params)=>{
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id); // get thte recipe in the position of our array
          console.log(this.recipe,this.id)
        }
      )
  }
  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  onEdit(){
    this.router.navigate(['edit'],{relativeTo: this.route});
  }
  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
