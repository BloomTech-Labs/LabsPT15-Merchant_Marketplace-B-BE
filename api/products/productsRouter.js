const express = require('express');
const authRequired = require('../middleware/authRequired');
const Model = require('../globalModel');
const Products = require('../products/productsModel');
const endpointCreator = require('../endPoints');
const helper = require('../helper');
const router = express.Router();

// get item by id
router.get('/:productID', authRequired, async (req, res) => {
  const { productID } = req.params;
  const response = await Products.findProductByID(productID);
  try {
    if (response) {
      res.status(200).json(response);
    } else {
      helper.notFound('product', res);
    }
  } catch {
    helper.dbError(res);
  }
});

router.get('/:productID/tags', authRequired, async (req, res) => {
  const { productID } = req.params;
  const response = await Products.getTagsByProductID(productID);

  try {
    if (response) {
      res.status(200).json(response);
    } else {
      helper.notFound('product', res);
    }
  } catch {
    helper.dbError(res);
  }
});

router.get('/tags/:tagID', authRequired, async (req, res) => {
  const { tagID } = req.params;
  const response = await Model.findById('tags', tagID);

  try {
    if (response) {
      res.status(200).json(response);
    } else {
      helper.notFound('tag', res);
    }
  } catch {
    helper.dbError(res);
  }
});

// POST profile can create an item
router.post('/', authRequired, async (req, res) => {
  endpointCreator.createData('products', req, res);
});

// PUT profile can edit an item
router.put('/:productId', authRequired, async (req, res) => {
  const data = req.body;
  const { productId } = req.params;
  const response = await Model.update('products', productId, data);
  try {
    if (response) {
      res.status(200).json(response);
    } else {
      helper.notFound('product', res);
    }
  } catch {
    helper.dbError(res);
  }
});

// DELETE profile can delete an item
router.delete('/:productId/', authRequired, async (req, res) => {
  endpointCreator.deleteData('products', req, res);
});

//POST items and tags are connected
router.post('/:itemID/tag/:tagID', authRequired, async (req, res) => {
  const { itemID, tagID } = req.params;
  const response = await Model.connectProductsAndTags(itemID, tagID);
  try {
    if (response) {
      res
        .status(200)
        .json({ message: `You have added tag: ${tagID} to item: ${itemID}` });
    } else {
      res.status(404).json({ message: 'You cannot add this tag' });
    }
  } catch (err) {
    helper.dbError(res);
  }
});

module.exports = router;
