/*vintage-shop@0.0.0#home.component/template*/
define("vintage-shop@0.0.0#home.component/template",["can/view/stache/stache","can/component/component"],function(e){return e([{tokenType:"chars",args:["\n  \n    "]},{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["jumbotron"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"chars",args:["\n        "]},{tokenType:"start",args:["h1",!1]},{tokenType:"end",args:["h1",!1]},{tokenType:"chars",args:["Vintage things are vintage"]},{tokenType:"close",args:["h1"]},{tokenType:"chars",args:["\n        "]},{tokenType:"start",args:["p",!1]},{tokenType:"end",args:["p",!1]},{tokenType:"chars",args:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum volutpat tellus non eleifend. Sed auctor euismod mi ac ultrices. In congue scelerisque orci, aliquet commodo magna gravida ac. "]},{tokenType:"close",args:["p"]},{tokenType:"chars",args:["\n        "]},{tokenType:"start",args:["p",!1]},{tokenType:"end",args:["p",!1]},{tokenType:"chars",args:["\n          "]},{tokenType:"start",args:["a",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["btn btn-lg btn-primary"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"attrStart",args:["href"]},{tokenType:"special",args:["routeUrl page='cart'"]},{tokenType:"attrEnd",args:["href"]},{tokenType:"attrStart",args:["role"]},{tokenType:"attrValue",args:["button"]},{tokenType:"attrEnd",args:["role"]},{tokenType:"end",args:["a",!1]},{tokenType:"chars",args:["Go to Cart"]},{tokenType:"close",args:["a"]},{tokenType:"chars",args:["\n        "]},{tokenType:"close",args:["p"]},{tokenType:"chars",args:["\n      "]},{tokenType:"close",args:["div"]},{tokenType:"chars",args:["\n    \n  "]},{tokenType:"done",args:[]}])});
/*vintage-shop@0.0.0#home.component/view-model*/
define("vintage-shop@0.0.0#home.component/view-model",["can/map/","can/map/define/"],function(e,n){"use strict";e&&e.__esModule||(e={"default":e}),n&&n.__esModule||(n={"default":n});var t=e["default"],o=t.extend({define:{message:{value:"This is the shop-home component"}}});return{get default(){return o},__esModule:!0}});
/*done-component@0.4.1#component*/
define('done-component@0.4.1#component', [], function(){ return {}; });
/*vintage-shop@0.0.0#home.component!done-component@0.4.1#component*/
define("vintage-shop@0.0.0#home.component!done-component@0.4.1#component",["can/component/component","vintage-shop@0.0.0#home.component/template","vintage-shop@0.0.0#home.component/view-model"],function(e,n,o){var t=function(e){return e&&e["default"]?e["default"]:e?e:void 0},o=t("undefined"!=typeof o?o:void 0),p=e.extend({tag:"shop-home",template:t("undefined"!=typeof n?n:void 0),viewModel:o,events:t("undefined"!=typeof events?events:void 0),helpers:t("undefined"!=typeof helpers?helpers:void 0),simpleHelpers:t("undefined"!=typeof simpleHelpers?simpleHelpers:void 0)});return{Component:p,ViewModel:p.Map,viewModel:o}});