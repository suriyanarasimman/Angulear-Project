import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'sample recipe', 'https://st3.depositphotos.com/13324256/17303/i/1600/depositphotos_173034766-stock-photo-woman-writing-down-recipe.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
