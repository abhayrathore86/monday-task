const Promise = require('bluebird');
const moment = require('moment');
const fetch = (...args) =>
    import ('node-fetch').then(({ default: fetch }) => fetch(...args));

const mondayService = require('../service/monday-service');

exports.uploadFile = async(req, res) => {
    try {
        const payload = req.body;
        mondayService.uploadFile(payload, res);
    } catch (err) {
        return res.status(500).send(err.message);
    }

}