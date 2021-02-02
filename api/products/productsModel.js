const db = require('../data/db-config');

const findProductByID = async ({ id }) => {
  return await db('products').select('*').where({ id });
};

const createProduct = async (store_id, product) => {
  return await db('products').insert(product).where({ store_id });
};

// GET info from join table
const getTagsByProductID = async (productID) => {
  return db('products as p')
    .join('products_tags as pt', 'p.id', 'pt.product_id')
    .join('tags as t', 'pt.tag_id', 't.id')
    .where('pt.product_id', productID)
    .returning('*');
};

module.exports = {
  findProductByID,
  createProduct,
  getTagsByProductID,
};
