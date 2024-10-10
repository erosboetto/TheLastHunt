import express from 'express';
import Planet from '../models/Planet.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const query = {};
    if (req.query.name) {
        query.name = { $regex: req.query.name, $options: 'i' };
    }

    try {
        const planets = await Planet.find(query);
        res.status(200).json(planets);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

export default router