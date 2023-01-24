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

router.post('/', async (req, res, next) => {
    try {
        const { content, user_id } = req.body;
        await db('tasks').insert({ content, user_id });
        res.sendStatus(201);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;
