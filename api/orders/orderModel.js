const db = require('../data/db-config');

const findOrderByID = async ({ id }) => {
  return await db('orders').select('*').where({ id });
};

const createOrder = async (order) => {
  return await db('orders').insert(order);
};

module.exports = {
  findOrderByID,
  createOrder,
};
