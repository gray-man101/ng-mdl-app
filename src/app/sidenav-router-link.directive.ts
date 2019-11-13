import {Directive, HostListener} from '@angular/core';
import {ShoppingCartService} from "./shopping-cart/shopping-cart.service";

@Directive({
  selector: '[sidenavLink]'
})
export class SidenavRouterLinkDirective {

  constructor(private shoppingCartService: ShoppingCartService) {
  }

  @HostListener('click') onClick() {
    this.shoppingCartService.clearCartItems();
    let layout: any = document.querySelector('.mdl-layout');
    layout.MaterialLayout.toggleDrawer();
    document.querySelector(".mdl-layout__content").scrollTop = 0;
  }

}
