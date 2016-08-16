import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './header.less!';
import template from './header.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the header component'
    }
  }
});

export default Component.extend({
  tag: 'shop-header',
  viewModel: ViewModel,
  template
});