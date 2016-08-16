import QUnit from 'steal-qunit';
import { ViewModel } from './cart-list';

// ViewModel unit tests
QUnit.module('vintage-shop/shop-cart/cart-list');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the list component');
});
