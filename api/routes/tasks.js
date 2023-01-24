const express = require('express');
const router = express.Router();

const Task = require('../models/Task');

router.get('/', async (req, res, next) => {
    try {
        const tasks = await Task.findAll();
        res.json({ data: tasks });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.post('/', async (req, res, next) => {

    const { content, user_id } = req.body;

    try {
        await Task.create({ content, user_id });
        res.sendStatus(201);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;
