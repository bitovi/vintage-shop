import QUnit from 'steal-qunit';
import { ViewModel } from './shipping';

// ViewModel unit tests
QUnit.module('vintage-shop/shipping');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the shipping component');
});
