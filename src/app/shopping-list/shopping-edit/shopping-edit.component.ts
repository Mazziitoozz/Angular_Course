import { Component, OnInit, ElementRef, ViewChild,EventEmitter, Output, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  //without using TD form approach
  // @ViewChild('nameInput') nameInputRef: ElementRef; // we need to use viewchild to specify how we havve called the element with a local reference #nameInput in html
  // @ViewChild('amountInput') amountInputRef: ElementRef; 
  // @Output() ingredientAdded = new EventEmitter<Ingredient>(); // we import form model the object ingredient 
  @ViewChild('f') slForm:NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription= this.slService.startEditing
      .subscribe((index:number) =>{
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slService.getIngredient(index);
        // we cath the values and add to the form
        this.slForm.setValue({
          name:this.editedItem.name,
          amount:this.editedItem.amount
        })
      })
  }
  onSubmit(form:NgForm){
    // const ingName = this.nameInputRef.nativeElement.value;   // We define const just to clearify the code
    // const ingAmount = this.amountInputRef.nativeElement.value;
    const value = form.value; // values in the form. 
    const newIngredient = new Ingredient(value.name,value.amount,'https://freshpoint.com/wp-content/uploads/commodity-yellow-onion.jpg');
    if(this.editMode){
      this.slService.updateIgredient(this.editedItemIndex,newIngredient);
    }else {
      this.slService.addIngredient(newIngredient);// " The service is storage in slSevice and I will call the method addIngredient"
    }
    this.editMode =false;
    form.reset();
  }
  onClear(){
   this.slForm.reset();
   this.editMode = false;
  }
  onDelete(){
    this.slService.deleteIngredient(this.editedItemIndex)
    this.onClear(); // first we clear the form
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
