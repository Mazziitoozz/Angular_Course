import { Component, OnInit, Input, EventEmitter,Output} from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe; // to get any data from outsite we need to use input. recipe is a object which has the form of our recipe model
                            // It should be the same name that the property that we use when we call to the app-recipe-item []
  @Input() index:number; // no we can have here the index
  
  //@Output() recipeSelected = new EventEmitter<void>();// we want to pass this data outside. When you click in the onselected event you are going to emit this object ans storage in a variable call recipeselected
  // we can improve the method with the services because is a mess
  constructor() { } //private recipeService: RecipeService we dont need with routing

  ngOnInit(): void {
    console.log(this.index);

  }

  // onSelected(){
  //   this.recipeService.recipeSelected.emit(this.recipe);
  //   //this.recipeSelected.emit();
  // }
}
