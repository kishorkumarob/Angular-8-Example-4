import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter, Output } from '@angular/core';

export class ShoppingListService {
    @Output() ingredientChanged =  new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Sirloin Cut Beef', 200),
        new Ingredient('Onion',10)
      ];

      getIngredients() {
        return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient) {
          this.ingredients.push(ingredient);
          this.ingredientChanged.emit(this.ingredients.slice());
      }
}