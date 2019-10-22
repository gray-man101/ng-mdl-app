import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[sidenavLink]'
})
export class SidenavRouterLinkDirective {

  constructor() {
  }

  @HostListener('click') onClick() {
    let layout: any = document.querySelector('.mdl-layout');
    layout.MaterialLayout.toggleDrawer();
    document.querySelector(".mdl-layout__content").scrollTop = 0;
  }

}
