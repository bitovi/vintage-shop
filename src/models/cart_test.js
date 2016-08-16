import QUnit from 'steal-qunit';
import Cart from './cart';

QUnit.module('models/cart');

QUnit.test('getList', function(){
  stop();
  Cart.getList().then(function(items) {
    QUnit.equal(items.length, 2);
    QUnit.equal(items.attr('0.description'), 'First item');
    start();
  });
});
