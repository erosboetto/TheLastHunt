import express from 'express';

const router = express.Router();

const weapons = [
    {
        id: 1,
        name: 'H2LW',
        description: "Pistola leggera e versatile",
        munitions: 14
    },
    {
        id: 2,
        name: 'H8SC',
        description: "Fucile d'assalto",
        munitions: 30
    },
    {
        id: 3,
        name: 'H12LR',
        description: "Fucile di precisione",
        munitions: 8
    },
    {
        id: 4,
        name: 'H9HW',
        description: "Mitragliatrice pesante",
        munitions: 400
    },
    {
        id: 5,
        name: 'GMI',
        description: "Coppia di Blaster automatici",
        munitions: 500
    },
    {
        id: 6,
        name: 'GRI',
        description: "Fucile d'assalto al plasma",
        munitions: 50
    },
    {
        id: 7,
        name: 'GHRI',
        description: "Mitragliatrice pesante al plasma",
        munitions: 500
    },
    {
        id: 8,
        name: 'Spada di Tyran',
        description: 'Ottenibile al completamento di: La Famiglia e il Tradimento',
    }
];

router.get('/', (req, res) => {
    if (req.query.name) {
        const weapons_filtered = weapons.filter(weapon => weapon.name.toLowerCase().includes(req.query.name.toLowerCase()));

        res.status(200).json(weapons_filtered);
    } else {
        res.status(200).json(weapons);
    }

    if (req.query.maxPrice) {
        const weapons_filtered = weapons.filter(weapon => weapon.price <= req.query.maxPrice);
        res.status(200).json(weapons_filtered);
    }
})

// router.get('/:id', async (req, res) => {
//     const weapon = await Weapon.findById(req.params.id);
//     res.status(200).json(weapon);
// })

// router.post('/', async (req, res) => {
//     const existingWeapon = await Weapon.findOne({ name: req.body.name });
//     if (existingWeapon) {
//         res.status(400).json({ message: 'Weapon already exists' });
//     }

//     const weapon = new Weapon(req.body);
//     await weapon.save();

//     res.status(201).json(weapon);
// });

export default router