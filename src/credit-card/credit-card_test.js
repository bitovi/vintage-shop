import QUnit from 'steal-qunit';
import { ViewModel } from './credit-card';

// ViewModel unit tests
QUnit.module('vintage-shop/credit-card');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the credit-card component');
});
