var mongoose = require('mongoose');

module.exports = mongoose.model('score', {
    red :{
        type: Number,
        default : 0
    },
   
    green :{
        type: Number,
        default : 0
    },

    blue :{
        type: Number,
        default : 0
    },
    
    yellow :{
        type: Number,
        default : 0
    }
    
});