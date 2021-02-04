const db = require('../../data/db-config');

const findProfileByID = async (id) => {
  return await db('profiles').select('*').where({ id }).first();
};

const findAllStoresByProfileID = async (owner_id) => {
  return await db('stores').select('*').where({ owner_id });
};

module.exports = {
  findProfileByID,
  findAllStoresByProfileID,
};
