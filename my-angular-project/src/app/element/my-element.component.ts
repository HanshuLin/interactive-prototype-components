import { Component } from '@angular/core';
import {products} from '../products';

@Component({
  selector: 'app-my-element-list',
  templateUrl: './my-element.component.html',
  styleUrls: ['./my-element.component.css']
})

export class MyElementComponent {
  products = products;
  constructor() {}
}

