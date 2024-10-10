import mongoose from "mongoose";

const CharacterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    src: {
        type: String,
        required: true,
    }
});

const Character = mongoose.model('Character', CharacterSchema);
export default Character;