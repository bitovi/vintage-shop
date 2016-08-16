import QUnit from 'steal-qunit';
import { ViewModel } from './product-list-item';

// ViewModel unit tests
QUnit.module('vintage-shop/product-list-item');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the product-list-item component');
});
