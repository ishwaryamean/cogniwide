var express = require('express');
var router = express.Router();
var product=require("../controller/tcudorp")


router.get('/product',product.products)

module.exports = router;
