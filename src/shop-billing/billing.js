import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './billing.less!';
import template from './billing.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the billing component'
    }
  }
});

export default Component.extend({
  tag: 'shop-billing',
  viewModel: ViewModel,
  template
});