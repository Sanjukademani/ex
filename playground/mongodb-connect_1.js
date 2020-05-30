const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected Successfully to MongoDB Server');

    //Just to insert one element in db
    db.collection('Todos').insert({
        name : 'Sanju Kademani',
        completed : true   
    },(err, result) => {
        if(err){
            return console.log('Unable to insert todos', err);
        }
        console.log(JSON.stringify(result, undefined, 2));
    });

    
    db.close();
});