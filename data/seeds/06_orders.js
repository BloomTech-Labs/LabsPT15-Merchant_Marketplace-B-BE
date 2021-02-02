const faker = require('faker');
exports.seed = function (knex) {
  // Inserts seed entries
  return knex('orders').insert([
    {
      id: 1,
      store_id: 0,
      buyer_id: '00ulthapbErVUwVJy4x6',
      ship_to: faker.address.streetAddress(),
      delivery_method: 'pickup',
      delivery_service: '',
      shipping_cost: 0,
      tracking_number: '',
      status: '',
      created_at: faker.date.past(),
    },
    {
      id: 2,
      store_id: 1,
      buyer_id: '00ultx74kMUmEW8054x6',
      ship_to: faker.address.streetAddress(),
      delivery_method: 'delivery',
      delivery_service: 'usps',
      shipping_cost: 1234,
      tracking_number: 'sald;ssssss',
      status: 'notShipped',
      created_at: faker.date.past(),
    },
    {
      id: 3,
      store_id: 2,
      buyer_id: '00ultwew80Onb2vOT4x6',
      ship_to: faker.address.streetAddress(),
      delivery_method: 'delivery',
      delivery_service: 'fedex',
      shipping_cost: 1000,
      tracking_number: '098374023987450fkjfjlk',
      status: 'shipped',
      created_at: faker.date.past(),
    },
  ]);
};
