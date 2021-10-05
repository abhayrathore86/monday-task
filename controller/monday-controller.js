const mondayService = require('../service/monday-service');

exports.uploadFile = async(req, res) => {
    try {
        const payload = req.body;
        mondayService.uploadFile(payload, res);
    } catch (err) {
        return res.status(500).send(err.message);
    }

}