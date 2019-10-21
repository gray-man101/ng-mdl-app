import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {ShoppingCartService} from "./shopping-cart/shopping-cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-app';

  constructor(private router: Router, private shoppingCartService: ShoppingCartService) {
  }

}
