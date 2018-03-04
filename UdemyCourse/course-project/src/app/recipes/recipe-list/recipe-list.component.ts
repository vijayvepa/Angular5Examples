import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes = [
    new Recipe('Dal Tadka', 'Authentic punjabi Dal Tadka',
      'http://ksmartstatic.sify.com/cmf-1.0.0/appflow/bawarchi.com/Image/oetskWhcgddfh_bigger.jpg')
  ];

  constructor() {
    this.recipes.push(
      new Recipe('Dal Tadka', 'Authentic punjabi Dal Tadka',
        'http://ksmartstatic.sify.com/cmf-1.0.0/appflow/bawarchi.com/Image/oetskWhcgddfh_bigger.jpg')
    );

  }

  ngOnInit() {
  }

}
