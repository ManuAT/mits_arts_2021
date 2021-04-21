var mongoose = require('mongoose');

module.exports = mongoose.model('event', {
    eventName :{
        type: String,
        default : ""
    },
   
    eventCategory :{
        type: String,
        default : ""
    },

    eventTime :{
        type: String,
        default : ""
    },
    
    eventWinner :{
        type: String,
        default : ""
    }
    
});