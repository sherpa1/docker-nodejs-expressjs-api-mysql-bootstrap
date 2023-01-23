const express = require('express');
const router = express.Router();

const User = require("../models/User");

router.get('/', async (req, res, next) => {
    try {
        const users = await User.query().withGraphFetched('tasks');//avec imbrications des objets tasks (1N)
        res.json({ data: users });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;
