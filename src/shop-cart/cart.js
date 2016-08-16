import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './cart.less!';
import template from './cart.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the cart component'
    }
  }
});

export default Component.extend({
  tag: 'shop-cart',
  viewModel: ViewModel,
  template
});