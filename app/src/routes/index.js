const router = require('express').Router();
const { info } = require('../controllers/info.controller');

router.get('/v1/info', info);

module.exports = router;
