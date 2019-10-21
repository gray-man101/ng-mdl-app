import {Injectable} from "@angular/core";
import {MdlSnackbarService} from "@angular-mdl/core";

@Injectable()
export class ShoppingCartService {

  private cartItems: Set<string> = new Set();

  constructor(private mdlSnackbarService: MdlSnackbarService) {
  }

  addToCart(productName: string) {
    this.cartItems.add(productName);
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

  removeFromCart(productName: string) {
    this.cartItems.delete(productName);
  }

  cartContains(productName: string) {
    return this.cartItems.has(productName);
  }

}
