import express from 'express';
import authenticateJWT from '../config/jwt.js';
import cloudinary from '../config/cloudinary.js';

const router = express.Router();

router.post('/', authenticateJWT, (req, res) => {
    const output = {
        ...req.body,
        message: "Email sent successfully!"
    };

    res.status(201).json(output);
});

router.post('/', async (req, res) => {
    // Use the uploaded file's name as the asset's public ID and 
    // allow overwriting the asset with new versions
    const options = {
        use_filename: true,
        unique_filename: false,
        overwrite: true,
    };

    try {
        // Upload the image
        const result = await cloudinary.uploader.upload(req.body.path, options);
        console.log(result);
        res.status(201).json(result);
    } catch (error) {
        console.error(error);
    }
});

export default router