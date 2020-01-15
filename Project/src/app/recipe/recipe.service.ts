import { Recipe } from './recipe.model';
import { EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {

    @Output() recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Steak','Using this recipe you can prepare a delicious steak.',
        'https://media1.s-nbcnews.com/i/newscms/2018_07/1318715/grilled-steak-today-tease-180216_89508b219dd455b4d43311782841f938.jpg',
        [new Ingredient('Meat', 1),
        new Ingredient('Thyme', 10)]),
        new Recipe('Rib Eye','Using this recipe you can prepare a delicious rib eye.',
        'https://media1.s-nbcnews.com/i/newscms/2018_07/1318715/grilled-steak-today-tease-180216_89508b219dd455b4d43311782841f938.jpg',
        [new Ingredient('Lamb', 10),
        new Ingredient('RoseMary', 2)])
      ];

      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(index: number) {
          return this.recipes['index'];
      }
    
}