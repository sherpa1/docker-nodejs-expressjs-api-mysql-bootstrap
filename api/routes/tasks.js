const express = require('express');
const router = express.Router();

const Task = require("../models/Task");

router.get('/', async (req, res, next) => {
    try {
        const tasks = await Task.query().withGraphFetched('user');//avec imbrication des users (N1)
        res.json({ data: tasks });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;
