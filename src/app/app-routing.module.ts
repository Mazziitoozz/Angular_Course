import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
// Dont forget add in app.module this module and in the html files router-outlet
const appRoutes:Routes =[
    { path: '', redirectTo:'recipes',pathMatch:'full'}, // we only redirect if the full path is empty otherwise we will redirect all time
    { path: 'recipes',component:RecipesComponent, children:[
        {path: '', component: RecipeStartComponent},
        {path: 'new', component: RecipeEditComponent},
        {path: ':id', component: RecipeDetailComponent}, // it is important the order! because otherwise new will be interpretated as a id
        {path: ':id/edit', component: RecipeEditComponent},
    ]},
    { path: 'shopping-list',component:ShoppingListComponent},
]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}