var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require ('./db_postman_3/mongoose'); //importing db details
var {Todo} = require ('./models_postman_3/todo'); //importing todo

var app = express();
app.use(bodyParser.json());
app.post('/todos', (req,res) => {
    console.log(req.body);
    var todo = new Todo({
        text : req.body.text
     }); 
 
     todo.save().then((doc) => {
         console.log('Saved to todo :: ',doc);
         res.send(doc);
     },(e) => {
         console.log('Unable to save todo :: ',e);
         res.send(e);
     });
});

app.listen(3000, () => {
    console.log('Application started @ 3000');
});
