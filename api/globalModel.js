const db = require('../data/db-config');

const findAll = async (table) => {
  return await db(table);
};

const findBy = (table, filter) => {
  return db(table).where(filter);
};

const findById = async (table, id) => {
  return db(table).where({ id }).first().select('*');
};

const create = async (table, data) => {
  return db(table).insert(data).returning('*');
};

const update = (table, id, obj) => {
  return db(table).where({ id }).first().update(obj).returning('*');
};

const remove = async (table, id) => {
  return await db(table).where({ id }).del();
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
