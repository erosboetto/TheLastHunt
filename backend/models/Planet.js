import mongoose from 'mongoose';

const PlanetSchema = new mongoose.Schema({
    src: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});

const Planet = mongoose.model('Planet', PlanetSchema);
export default Planet;