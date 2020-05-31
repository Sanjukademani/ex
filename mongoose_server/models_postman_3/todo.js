var mongoose = require ('mongoose');

var Todo = mongoose.model('Todo',{ //Todo is collection name
    //properties/type or value we can store
    //text, completed and completed are like column name
    text :{
        type : String,
        required : true, //mandatory field
        minlength : 1, //length of the value
        trim : true
    }, compeleted :{
        type : Boolean,
        default : false
    }, compeletedAt :{
        type : Number,
        default : 1 //default value for completedAt
    }
});

module.exports = {Todo};

