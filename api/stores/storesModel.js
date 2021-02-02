const db = require('../data/db-config');

const findStoreByID = async ({ id }) => {
  return await db('stores').select('*').where({ id });
};

const createStore = async (store) => {
  return await db('stores').insert(store);
};

module.exports = {
  findStoreByID,
  createStore,
};
