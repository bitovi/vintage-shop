import QUnit from 'steal-qunit';
import { ViewModel } from './shop-billing';

// ViewModel unit tests
QUnit.module('vintage-shop/shop-billing');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the shop-billing component');
});
