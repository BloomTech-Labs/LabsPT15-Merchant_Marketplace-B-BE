exports.seed = function (knex) {
  // Inserts seed entries
  return knex('orders_products').insert([
    { order_id: 1, product_id: 1, quantity: 3 },
    { order_id: 1, product_id: 4, quantity: 3 },
    { order_id: 2, product_id: 1, quantity: 3 },
    { order_id: 2, product_id: 2, quantity: 3 },
    { order_id: 2, product_id: 3, quantity: 3 },
    { order_id: 2, product_id: 4, quantity: 3 },
    { order_id: 3, product_id: 4, quantity: 3 },
  ]);
};
