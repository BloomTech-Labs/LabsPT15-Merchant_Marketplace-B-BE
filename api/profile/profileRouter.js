const express = require('express');
const authRequired = require('../middleware/authRequired');
const Model = require('../globalModel');
const Profiles = require('./profileModel');
const helper = require('../helper');
const router = express.Router();

router.get('/', authRequired, function (req, res) {
  Model.findAll('profiles')
    .then((profiles) => {
      res.status(200).json(profiles);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: err.message });
    });
});

router.get('/:profileID', authRequired, async (req, res) => {
  const { profileID } = req.params;
  const response = await Profiles.findProfileByID(profileID);
  try {
    if (response) {
      res.status(200).json(response);
    } else {
      helper.notFound('profile', res);
    }
  } catch {
    helper.dbError(res);
  }
});

router.get('/:profileID/stores', authRequired, async (req, res) => {
  const { profileID } = req.params;
  const response = await Profiles.findAllStoresByProfileID(profileID);
  try {
    if (response) {
      res.status(200).json(response);
    } else {
      helper.notFound('profile', res);
    }
  } catch {
    helper.dbError(res);
  }
});

router.put('/:profileID', authRequired, async (req, res) => {
  const data = req.body;
  const { profileID } = req.params;
  const response = await Model.update('profiles', profileID, data);
  try {
    if (response) {
      res.status(200).json(response);
    } else {
      helper.notFound('profile', res);
    }
  } catch {
    helper.dbError(res);
  }
});

module.exports = router;
