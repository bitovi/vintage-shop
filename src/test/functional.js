import F from 'funcunit';
import QUnit from 'steal-qunit';

F.attach(QUnit);

QUnit.module('vintage-shop functional smoke test', {
  beforeEach() {
    F.open('../development.html');
  }
});

QUnit.test('vintage-shop main page shows up', function() {
  F('title').text('vintage-shop', 'Title is set');
});
