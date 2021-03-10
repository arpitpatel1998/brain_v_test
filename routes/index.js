const express = require('express');
const router = express.Router();
const { answer } = require('../controller/index.controller');
/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Test' });
});

router.post('/answer/:questionId',answer);
module.exports = router;
