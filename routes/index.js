const express = require('express');
const router = express.Router();


// Rute utama
router.get('/', function(req, res, next) {
  res.send('hello world');
});

module.exports = router;
