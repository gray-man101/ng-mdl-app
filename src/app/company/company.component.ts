import {Component, OnInit} from '@angular/core';
import {MdlSnackbarService} from "@angular-mdl/core";

@Component({
  selector: 'demo-content',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  cartLink: HTMLSpanElement;
  selectedProductCount: number = 0;

  constructor(private mdlSnackbarService: MdlSnackbarService) {
  }

  ngOnInit() {
    this.cartLink = document.querySelector('#shopping-cart-link');
  }

  showSnackbar() {
    this.selectedProductCount++;
    this.cartLink.parentElement.style.backgroundColor = '#f75454';
    this.cartLink.setAttribute('data-badge', String(this.selectedProductCount));
    this.mdlSnackbarService.showSnackbar({
      message: 'The Message',
      action: {
        handler: () => {
          this.mdlSnackbarService.showToast('You hit the ok Button');
        },
        text: 'OK'
      }
    });
  }

}
