const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected Successfully to MongoDB Server');

    //findOneAndUpdate
    db.collection('Todos').findOneAndUpdate({
        _id : "1"
    },{
        $set :{
            completed : false
        }
    },{
        returnOriginal : false
    }).then((result) => {
        console.log(result);
    });
    
    db.close();
});