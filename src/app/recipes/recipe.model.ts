import { Ingredient } from '../shared/ingredient.model';

export class Recipe{
    // we define the properties that our Recipe is going to have.
    public name: string;     //you need to use colons after the porperty and indicate the type
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[] ;

    constructor(name:string, desc:string, imagePath:string,ingredients: Ingredient[]){  // we put the inputs(like in a function). There is a shortcut(see shared/IngredientModel)
        // on the left we write the properties we defined above
        this.name = name;   
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients;

    }
    
}