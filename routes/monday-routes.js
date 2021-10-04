const router = require('express').Router();
const { uploadFile } = require('../controller/monday-controller.js');

router.post('/uploadFile', uploadFile);

module.exports = router;