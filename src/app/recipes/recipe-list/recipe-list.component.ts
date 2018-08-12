import { Component, OnInit } from '@angular/core';
// Import model
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is just a test',
      'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
    ),
    new Recipe(
      'A test recipe',
      'This is just a test',
      'https://images.pexels.com/photos/160805/breakfast-vegan-healthy-eat-160805.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
    )
  ];

  constructor() {}

  ngOnInit() {}
}
