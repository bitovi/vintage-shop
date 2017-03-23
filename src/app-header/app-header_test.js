import QUnit from 'steal-qunit';
import { ViewModel } from './app-header';

// ViewModel unit tests
QUnit.module('vintage-shop/app-header');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the app-header component');
});
