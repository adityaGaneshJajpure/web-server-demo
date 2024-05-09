const router = require('express').Router();
const { info } = require('../controllers/info.controller');
const { health } = require('../controllers/health.controller');

router.get('/v1/info', info);
router.get('/v1/health', health);

module.exports = router;
