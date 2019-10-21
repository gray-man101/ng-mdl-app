import {Component, OnInit} from '@angular/core';
import {ShoppingCartService} from "../shopping-cart/shopping-cart.service";

@Component({
  selector: 'demo-content',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit() {
  }

}
