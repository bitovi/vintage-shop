import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './credit-card.less!';
import template from './credit-card.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the credit-card component'
    }
  }
});

export default Component.extend({
  tag: 'credit-card',
  viewModel: ViewModel,
  template
});