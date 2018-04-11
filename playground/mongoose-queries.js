const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {Users} = require('./../server/models/user');

// var id = '5acc708c59b25d0c2085d59911';

// if(!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) =>{
//     console.log('Todo', todo);
// })

// Todo.findById(id)
//     .then((todo) => {
//         if(!todo) {
//             return console.log('Id not found');
//         }
//         console.log('Todo findById', todo);
//     })
//     .catch((e) => console.log(e));

var userID = '5ac5ddb4f56285c8142f7e1a';

Users.findById(userID)
    .then((user) => {
        if(!user) {
            return console.log('User ID not found');
        }
        console.log('User', user);
    }).catch((e) => console.log(e));