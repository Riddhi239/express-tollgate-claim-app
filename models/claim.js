const mongoose = require('mongoose')
const { 
    v1: uuidv1,
    v4: uuidv4,
  } = require('uuid');
  
const claimSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    hospital: {
        type: String,
        required: true
    },
    policy: {
        type: String,
        required: true
    },
    policy_id: {
        type: String,
        required: true,
        default: () => uuidv1(),
        index: { unique: true },
    },
    hospital_id:{
        type: String,
        required: true,
        default: () => uuidv4(),
        index: { unique: true },

    }
    

})

module.exports = mongoose.model('Claim',claimSchema)