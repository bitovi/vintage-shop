import fixture from 'can-fixture';

const store = fixture.store([{
  id: 0,
  items: [
   {
     id: 5,
     price: '80.00',
     totalPrice: '140.00',
     retailPrice: '160.00',
     qty: '2',
     title: 'Vintage Chair',
     description: 'White with natural wood.',
     image: 'src/base/images/chair.png'
   },
    {
     id: 6,
     price: '25.00',
     totalPrice: '23.00',
     retailPrice: '25.00',
     qty: '1',
     title: 'Wire basket',
     description: 'Metal wire.',
     image: 'src/base/images/basket.png'
   } 
  ]
}, {
  id: 1,
  items: [
   {
     id: 7,
     price: '35.00',
     title: 'Vintage Clock',
     description: 'Silver.',
     image: 'src/base/images/clock.png'
   },
    {
     id: 8,
     price: '82.00',
     title: 'Vintage Camera',
     description: 'Black and silver.',
     image: 'src/base/images/camera.png'
   } 
  ]
}]);

fixture({
  'GET /cart': store.findAll,
  'GET /cart/{id}': store.findOne,
  'POST /cart': store.create,
  'PUT /cart/{id}': store.update,
  'DELETE /cart/{id}': store.destroy
});

export default store;
