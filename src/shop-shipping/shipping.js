import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './shipping.less!';
import template from './shipping.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the shipping component'
    }
  }
});

export default Component.extend({
  tag: 'shop-shipping',
  viewModel: ViewModel,
  template
});