const db = require('../data/db-config');

const findOrderByID = async ({ id }) => {
  return await db('orders').select('*').where({ id });
};

const createOrder = async (order) => {
  return await db('orders').insert(order);
};

const getProductsByOrderID = async (orderID) => {
  return db('orders as O')
    .join('orders_products as op', 'O.id', 'op.order_id')
    .join('products as p', 'op.product_id', 'p.id')
    .where('op.order_id', orderID)
    .returning('*');
};

module.exports = {
  findOrderByID,
  createOrder,
  getProductsByOrderID,
};
