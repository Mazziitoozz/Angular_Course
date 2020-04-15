import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe:Recipe; // when you use input you can pass the arguemnt to the parent(recipe.component) and use like that    
   //<app-recipe-detail *ngIf="selectedRecipe;else infoText" [recipe]="selectedRecipe">
  constructor() { }

  ngOnInit(): void {
  }

}
