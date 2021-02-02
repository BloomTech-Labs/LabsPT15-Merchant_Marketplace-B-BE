const express = require('express');
const authRequired = require('../middleware/authRequired');
const Model = require('../globalModel');
const Orders = require('../orders/ordersModel');
const endpointCreator = require('../endPoints');
const helper = require('../helper');
const router = express.Router();

// get order by id
router.get('/:orderID', authRequired, async (req, res) => {
  const { orderID } = req.params;
  const response = await Orders.findOrderById(orderID);
  try {
    if (response) {
      res.status(200).json(response);
    } else {
      helper.notFound('order', res);
    }
  } catch {
    helper.dbError(res);
  }
});

// POST profile can create an item
router.post('/', authRequired, async (req, res) => {
  endpointCreator.createData('orders', req, res);
});

// PUT profile can edit an item
router.put('/:orderId', authRequired, async (req, res) => {
  const data = req.body;
  const { orderId } = req.params;
  const response = await Model.update('orders', orderId, data);
  try {
    if (response) {
      res.status(200).json(response);
    } else {
      helper.notFound('order', res);
    }
  } catch {
    helper.dbError(res);
  }
});

// DELETE profile can delete an item
router.delete('/:orderId/', authRequired, async (req, res) => {
  endpointCreator.deleteData('orders', req, res);
});

module.exports = router;
