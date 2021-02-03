const db = require('../../data/db-config');

const findStoreByID = async ({ id }) => {
  return await db('stores').select('*').where({ id });
};

const findAllProductsByStoreID = async ({ store_id }) => {
  return await db('products').select('*').where({ store_id });
};

const createStore = async (store) => {
  return await db('stores').insert(store);
};

module.exports = {
  findStoreByID,
  createStore,
  findAllProductsByStoreID,
};
