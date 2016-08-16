import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './recommended-list.less!';
import template from './recommended-list.stache!';
import Cart from '../models/cart';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the recommended-list component'
    },
    cartRecommended: {
      value: function() {
        return Cart.get({id:1})
      }
    }
  }
});

export default Component.extend({
  tag: 'recommended-list',
  viewModel: ViewModel,
  template
});