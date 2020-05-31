var mongoose = require ('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/MongooseTodoApp');
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

var newTodo = new Todo({
    text : ' Sanju Kademani   '
});

newTodo.save().then((doc) => {
    console.log('Saved todo :: ', doc);
},(e) => {
    console.log('Unable to save todo :: ',e);
});
