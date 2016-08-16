import QUnit from 'steal-qunit';
import { ViewModel } from './cart';

// ViewModel unit tests
QUnit.module('vintage-shop/cart');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the cart component');
});
