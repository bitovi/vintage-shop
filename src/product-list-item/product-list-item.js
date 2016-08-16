import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './product-list-item.less!';
import template from './product-list-item.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the product-list-item component'
    }
  }
});

export default Component.extend({
  tag: 'product-list-item',
  viewModel: ViewModel,
  template
});