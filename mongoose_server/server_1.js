var mongoose = require ('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/MongooseTodoApp');
var Todo = mongoose.model('Todo',{
    //properties/type or value we can store
    text :{
        type : String
    }, compeleted :{
        type : Boolean
    }, compeletedAt :{
        type : Number
    }
});

var newTodo = new Todo({
    text : 'Cook Dinner'
});

newTodo.save().then((doc) => {
    console.log('Saved todo :: ', doc);
},(e) => {
    console.log('Unable to save todo');
});

var newTodo1 = new Todo({
    text : 'Sanju Kademani',
    compeleted : true,
    compeletedAt : 23
});

newTodo1.save().then((doc) =>{
    console.log('Saved todo :: ',doc);
},(e) => {
    console.log('Unable to save todo');
});