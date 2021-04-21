var mongoose = require('mongoose');

module.exports = mongoose.model('item', {
    index :{
        type: String,
        default : ""
    },
   
    item :{
        type: String,
        default : ""
    }
    
    
    
});