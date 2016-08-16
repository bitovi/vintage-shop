import QUnit from 'steal-qunit';
import { ViewModel } from './address-form';

// ViewModel unit tests
QUnit.module('vintage-shop/shop-shipping/address-form');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the address-form component');
});
