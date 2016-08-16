import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './cart-list.less!';
import template from './cart-list.stache!';
import Cart from '../models/cart';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the list component'
    },
    cartPromise: {
      value: function() {
        return Cart.get({id:0})
      }
    }
  }
});

export default Component.extend({
  tag: 'cart-list',
  viewModel: ViewModel,
  template
});