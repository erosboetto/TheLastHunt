import mongoose from "mongoose";

const WeaponSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    munitions: {
        type: Number,
        required: true,
    },
    src: {
        type: String,
        required: true,
    }
});

const Weapon = mongoose.model('Weapon', WeaponSchema);
export default Weapon;