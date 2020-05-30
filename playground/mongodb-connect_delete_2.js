const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected Successfully to MongoDB Server');

 //deleteMany
 //db.collection('Todos').deleteMany({name : "Text1"}).then((result) => {
 //   console.log(result);
 //});
   
 //deleteOne
//db.collection('Todos').deleteOne({name : "Text2"}).then((result) => {
//    console.log(result);
//});

//findOneAndDelete
db.collection('Todos').findOneAndDelete({name : "Text3"}).then((result) => {
    console.log(result);
});

    db.close();
});