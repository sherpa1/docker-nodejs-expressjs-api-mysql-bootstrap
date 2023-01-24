const express = require('express');
const router = express.Router();

const User = require('../models/User');

router.get('/', async (req, res, next) => {
    try {
        const users = await User.findAll();
        res.json({ data: users });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;
