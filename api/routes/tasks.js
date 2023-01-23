const express = require('express');
const router = express.Router();
const db = require("../db_connection");


router.get('/', async (req, res, next) => {
    try {
        const tasks = await db('tasks');
        res.json({ data: tasks });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;
