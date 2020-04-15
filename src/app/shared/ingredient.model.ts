// This is a file we are going to share in recipes and shopping list that's why we have created a shared folder
export class Ingredient {

    constructor(public name:string, public amount:number, public imagePath:string,){ // It is a shortcut instead of define above the properties, and after that use this... to assign again

    }
}