const db = require('../data/db-config');

const findAll = async (db) => {
  return await db(db);
};

const findBy = (db, filter) => {
  return db(db).where(filter);
};

const findById = async (db, id) => {
  return db(db).where({ id }).first().select('*');
};

const create = async (db, data) => {
  return db(db).insert(data).returning('*');
};

const update = (db, id, obj) => {
  return db(db).where({ id }).first().update(obj).returning('*');
};

const remove = async (db, id) => {
  return await db(db).where({ id }).del();
};

const connectProductsAndTags = async (productID, tagID) => {
  return db('products_tags').insert({ product_id: productID, tag_id: tagID });
};

const connectOrdersAndProducts = async (orderID, productID, quantity) => {
  return db('orders_products').insert({
    order_id: orderID,
    product_id: productID,
    quantity: quantity,
  });
};

module.exports = {
  findAll,
  findBy,
  findById,
  create,
  update,
  remove,
  connectProductsAndTags,
  connectOrdersAndProducts,
};
