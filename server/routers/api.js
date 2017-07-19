const router = require('express').Router();
const controler = require('../controlers/getdata')

router.post('',controler.fromjson);

module.exports = router;
