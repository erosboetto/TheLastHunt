import express from 'express';
import Weapon from '../models/Weapon.js';

const router = express.Router();

const weapons = [
    {
        id: 1,
        name: 'H2LW',
        description: "Pistola leggera e versatile",
        munitions: 14,
        src: ''
    },
    {
        id: 2,
        name: 'H8SC',
        description: "Fucile d'assalto",
        munitions: 30,
        src: ''
    },
    {
        id: 3,
        name: 'H12LR',
        description: "Fucile di precisione",
        munitions: 8,
        src: "https://picsum.photos/id/1/600/300"
    },
    {
        id: 4,
        name: 'H9HW',
        description: "Mitragliatrice pesante",
        munitions: 400,
        src: ''
    },
    {
        id: 5,
        name: 'GMI',
        description: "Coppia di Blaster automatici",
        munitions: 50,
        src: ''
    },
    {
        id: 6,
        name: 'GRI',
        description: "Fucile d'assalto al plasma",
        munitions: 50,
        src: ''
    },
    {
        id: 7,
        name: 'GHRI',
        description: "Mitragliatrice pesante al plasma",
        munitions: 500,
        src: ''
    },
    {
        id: 8,
        name: 'Spada di Tyran',
        description: 'Ottenibile al completamento di: La Famiglia e il Tradimento',
        munitions: '',
        src: ''
    }
];

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
})

// router.get('/:id', async (req, res) => {
//     const weapon = await Weapon.findById(req.params.id);
//     res.status(200).json(weapon);
// })

router.post('/', async (req, res) => {
    const existingWeapon = await Weapon.findOne({ name: req.body.name });
    if (existingWeapon) {
        res.status(400).json({ message: 'Weapon already exists' });
    }

    const weapon = new Weapon(req.body);
    await weapon.save();

    res.status(201).json(weapon);
});

export default router