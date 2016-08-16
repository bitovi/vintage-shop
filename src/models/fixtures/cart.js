import fixture from 'can-fixture';

const store = fixture.store([{
  id: 0,
  items: [
   {
     id: 5,
     price: '70.00',
     title: 'Vintage Chair',
     description: 'White with natural wood.',
     image: 'http://lorempixel.com/200/200/technics/1'
   },
    {
     id: 6,
     price: '32.00',
     title: 'Wire basket',
     description: 'Metal wire.',
     image: 'http://lorempixel.com/200/200/technics/2'
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
     image: 'http://lorempixel.com/200/200/technics/3'
   },
    {
     id: 8,
     price: '82.00',
     title: 'Vintage Camera',
     description: 'Black and silver.',
     image: 'http://lorempixel.com/200/200/technics/4'
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
