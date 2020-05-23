import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id:number;
  editMode = false;
  recipeForm:FormGroup;

  constructor(private route:ActivatedRoute,
              private recipeService: RecipeService,
              private router:Router) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params:Params) =>{
          this.id = +params['id'] // because this is the name we wrtoe in our app routing
          this.editMode = params['id'] !=null; // just to check if we are in the edit Mode or creating a new recipe
          this.initForm(); // we call the method
        }
      )
  }

  onSubmit(){
    // const newRecipe = new Recipe(  you can define this constant or pass just the element
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingredients']);
    if(this.editMode){
      this.recipeService.updateRecipe(this.id,this.recipeForm.value) //newRecipe
    }else{
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.onCancel()//to navigate away
  }
  onCancel(){
    this.router.navigate(['../'],{relativeTo: this.route});// go one step back

  }
  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name':new FormControl(null,Validators.required),
        'amount':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),//postive numbers
      })
    );
  }
  onDeleteIngredient(index: number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
  get controls() { // a getter!
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
//react method
  private initForm() {
   
    let recipeName = '';
    let recipeImagePath ='';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]); //by default we dont have any ingredient

    if( this.editMode) {  // we need to check if we are in edit mode, we can autofield
      const recipe = this.recipeService.getRecipe(this.id)
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredients']){ //if ingredients exists
        for(let ingredient of recipe.ingredients){
          recipeIngredients.push( // create small form
            new FormGroup({
              'name':new FormControl(ingredient.name,Validators.required),
              'amount':new FormControl(ingredient.amount,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),//postive numbers
              'imagePath': new FormControl(ingredient.imagePath)
            })
          )
        }
      }
    }
    // if we are in edit mode the fields are going to autofield
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName,Validators.required),
      'imagePath': new FormControl(recipeImagePath,Validators.required),
      'description': new FormControl(recipeDescription,Validators.required),
      'ingredients': recipeIngredients //formArray
      
    })
  }

}
