import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
    const output = {
        ...req.body,
        message: "Email sent successfully!"
    };

    res.status(201).json(output);
})

export default router