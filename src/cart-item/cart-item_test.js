import QUnit from 'steal-qunit';
import { ViewModel } from './cart-item';

// ViewModel unit tests
QUnit.module('vintage-shop/shop-cart/cart-item');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the cart-item component');
});
