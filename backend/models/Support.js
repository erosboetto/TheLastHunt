import mongoose from "mongoose";

const supportQuestionSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true, 
    unique: true 
},
  problem: { 
    type: String, 
    required: true 
},
  img: { 

},
});

const supportQuestion = mongoose.model('supportQuestion', supportQuestionSchema);
export default supportQuestion;