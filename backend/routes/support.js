import express from 'express';

const router = express.Router();

const support = {
        email: "Inserisci la tua email",
        problem: "inserisci il problema",
        img: "Allega un immagine dell'errore"
    };

router.get('/', (req, res) => {
    res.status(200).json(support);
});

export default router