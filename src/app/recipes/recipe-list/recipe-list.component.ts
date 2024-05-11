import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Chole Bhature',
      'This is a simple receipe',
      'https://www.yumcurry.com/wp-content/uploads/2021/08/chole-bhature.jpg'
    ),
    new Recipe(
      'Chole Kulche',
      'This is a simple receipe',
      'https://www.yumcurry.com/wp-content/uploads/2021/08/chole-bhature.jpg'
    ),
  ];
}
