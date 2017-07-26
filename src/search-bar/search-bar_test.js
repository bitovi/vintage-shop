import QUnit from 'steal-qunit';
import { ViewModel } from './search-bar';

// ViewModel unit tests
QUnit.module('vintage-shop/search-bar');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the search-bar component');
});
