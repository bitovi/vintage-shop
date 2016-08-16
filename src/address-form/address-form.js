import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './address-form.less!';
import template from './address-form.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the address-form component'
    }
  }
});

export default Component.extend({
  tag: 'address-form',
  viewModel: ViewModel,
  template
});