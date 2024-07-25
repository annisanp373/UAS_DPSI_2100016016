const express = require('express');
const router = express.Router();

// Middleware untuk parsing JSON
router.use(express.json());

// Rute utama
router.get('/', function(req, res, next) {
  res.send('hello world');
});

module.exports = router;
