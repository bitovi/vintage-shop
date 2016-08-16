import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './cart-item.less!';
import template from './cart-item.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the cart-item component'
    }
  }
});

export default Component.extend({
  tag: 'cart-item',
  viewModel: ViewModel,
  template
});