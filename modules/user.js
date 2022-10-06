const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/loginsys');
var conn =mongoose.Collection;
var userSchema =new mongoose.Schema({
    username: {type:String, 
        required: true,
        index: {
            unique: true,        
        }},

	email: {
        type:String, 
        required: true,
        index: {
            unique: true, 
        },},
    password: {
        type:String, 
        required: true
    },
    date:{
        type: Date, 
        default: Date.now }
});

var userModel = mongoose.model('loginsys', userSchema);
module.exports=userModel;