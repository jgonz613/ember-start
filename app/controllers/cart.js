import Controller from '@ember/controller';

export default class CartController extends Controller {
  // subtotal = 0;
  get subtotal() {
    return this.model.reduce((acc, item) => acc + item.price, 0);
  }

  // tax = 0;
  get tax() {
    return 0.99 * this.subtotal;
  }

  // total = 0;
  get total() {
    return this.subtotal + this.tax;
  }
}
