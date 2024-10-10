import express from 'express';
import Weapon from '../models/Weapon.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const query = {};
    if (req.query.name) {
        query.name = { $regex: req.query.name, $options: 'i' };
    }
    if (req.query.maxPrice) {
        query.price = { $lte: req.query.maxPrice };
    }

    try {
        const weapons = await Weapon.find(query);
        res.status(200).json(weapons);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router