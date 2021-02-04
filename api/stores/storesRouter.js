const express = require('express');
const authRequired = require('../middleware/authRequired');
const Model = require('../globalModel');
const Stores = require('../stores/storesModel');
const endpointCreator = require('../endPoints');
const helper = require('../helper');
const router = express.Router();

// get item by id
router.get('/:storeID', authRequired, async (req, res) => {
  const { storeID } = req.params;
  const response = await Stores.findStoreByID(storeID);
  try {
    if (response) {
      res.status(200).json(response);
    } else {
      helper.notFound('store', res);
    }
  } catch {
    helper.dbError(res);
  }
});

router.get('/:storeID/products', authRequired, async (req, res) => {
  const { storeID } = req.params;
  const response = await Stores.findAllProductsByStoreID(storeID);
  try {
    if (response) {
      res.status(200).json(response);
    } else {
      helper.notFound('store', res);
    }
  } catch {
    helper.dbError(res);
  }
});

// POST profile can create an item
router.post('/', authRequired, async (req, res) => {
  endpointCreator.createData('stores', req, res);
});

// PUT profile can edit an item
router.put('/:storeId', authRequired, async (req, res) => {
  const data = req.body;
  const { storeId } = req.params;
  const response = await Model.update('stores', storeId, data);
  try {
    if (response) {
      res.status(200).json(response[0]);
    } else {
      helper.notFound('store', res);
    }
  } catch {
    helper.dbError(res);
  }
});

// DELETE profile can delete an item
router.delete('/:id', authRequired, async (req, res) => {
  endpointCreator.deleteData('stores', req, res);
});

module.exports = router;
