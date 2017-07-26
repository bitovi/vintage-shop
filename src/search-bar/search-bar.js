import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './search-bar.less!';
import template from './search-bar.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the search-bar component'
    }
  }
});

export default Component.extend({
  tag: 'search-bar',
  viewModel: ViewModel,
  template
});