import can from 'can';
import superMap from 'can-connect/can/super-map/';
import tag from 'can-connect/can/tag/';
import 'can/map/define/define';

export const Cart = can.Map.extend({
  define: {}
});

Cart.List = can.List.extend({
  Map: Cart
}, {});

export const cartConnection = superMap({
  url: '/cart',
  idProp: 'id',
  Map: Cart,
  List: Cart.List,
  name: 'cart'
});

tag('cart-model', cartConnection);

export default Cart;
