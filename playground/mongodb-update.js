// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to MongoDB Server')
    }
    console.log('Connected to MongoDB Server');

    // db.collection('Todos').findOneAndUpdate(
    //     {text: 'Eat Lunch'}, 
    //     {$set: {completed: true}},
    //     {returnOriginal: false})
    //     .then((result) => {console.log(result)});

    db.collection('Users').findOneAndUpdate(
        {_id: new ObjectID('5abb48b231c69814fc267e7d')},
        {
            $set: {name: 'Livia'},
            $inc: {age: 1}
        },
        {returnOriginal: false})
        .then((result) => console.log(result));

    // db.close();
});