import express from 'express';
import Character from '../models/Character.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const query = {};
    if (req.query.name) {
        query.name = { $regex: req.query.name, $options: 'i' };
    }
    if (req.query.role) {
        query.role = req.query.role;
    }

    try {
        const characters = await Character.find(query);
        res.status(200).json(characters);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;