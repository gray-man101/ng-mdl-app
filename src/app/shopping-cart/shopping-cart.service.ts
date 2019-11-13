import {Injectable} from "@angular/core";
import {MdlSnackbarService} from "@angular-mdl/core";

@Injectable()
export class ShoppingCartService {

  private _cartItems: Set<string> = new Set();

  constructor(private mdlSnackbarService: MdlSnackbarService) {
  }

  addToCart(productName: string) {
    this._cartItems.add(productName);
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
    this._cartItems.delete(productName);
  }

  cartContains(productName: string) {
    return this._cartItems.has(productName);
  }


  get cartItems(): Set<string> {
    return this._cartItems;
  }

  clearCartItems() {
    this._cartItems = new Set();
  }
}
