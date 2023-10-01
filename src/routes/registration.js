const express = require('express');
const router = express.Router();
const dbRegistration = require('../models/dbRegistration');


router.get('/', async (req, res) => {
    const data = await dbRegistration.find();
    res.json(data);
});

router.post('/', async (req, res) => {
    const data = new dbRegistration(req.body);
    await data.save();
    res.json({
        status: 'Created'
    })
});

router.patch('/:id', async (req, res) => {
    await dbRegistration.findByIdAndUpdate(req.params.id, req.baseUrl);
    res.json({
        status: 'Updated'
    })
});

router.delete('/:id', async (req, res) => {
    await dbRegistration.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Deleted'
    })
});

module.exports = router;