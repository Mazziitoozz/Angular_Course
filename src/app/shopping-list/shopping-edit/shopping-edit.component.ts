import { Component, OnInit, ElementRef, ViewChild,EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef; // we need to use viewchild to specify how we havve called the element
  @ViewChild('amountInput') amountInputRef: ElementRef; 
  // @Output() ingredientAdded = new EventEmitter<Ingredient>(); // we import form model the object ingredient 


  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }
  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;   // We define const just to clearify the code
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName,ingAmount,'https://freshpoint.com/wp-content/uploads/commodity-yellow-onion.jpg');
    // this.ingredientAdded.emit(newIngredient);
    // console.log(this.ingredientAdded);
    this.slService.addIngredient(newIngredient); // " The service is storage in slSevice and I will call the method addIngredient"
  }
}
