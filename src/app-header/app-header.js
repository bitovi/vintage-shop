import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './app-header.less!';
import template from './app-header.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the app-header component'
    }
  }
});

export default Component.extend({
  tag: 'app-header',
  viewModel: ViewModel,
  template
});