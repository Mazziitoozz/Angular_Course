import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  // providers:[ShoppingListService] we dont put here because we can also use in our recipes that's why we add in our app module
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  // ingredients: Ingredient[]=[
  //   new Ingredient('Potatoes',4,'https://www.irishtimes.com/polopoly_fs/1.3967277.1564062363!/image/image.jpg_gen/derivatives/box_620_330/image.jpg'),
  //   new Ingredient('Eggs',6,'https://www.collinsdictionary.com/images/thumb/eggs_110803370_250.jpg?version=4.0.61'),
  //   new Ingredient('Onions',2,'https://freshpoint.com/wp-content/uploads/commodity-yellow-onion.jpg'),
  // ];
  ingredients:Ingredient[];
  private subscription: Subscription;
  constructor(private slService:ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients() // we get the copy of our ingredients and storage in this variable
    this.subscription = this.slService.ingredientsChanged.subscribe( 
      (ingredients : Ingredient[])=>{
          this.ingredients = ingredients;
    }
  )}
  onEditItem(index:number){
    this.slService.startEditing.next(index);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  
}
