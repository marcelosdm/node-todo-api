const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {Users} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

//Todo.findOneAndRemove()
//Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5ad8626abfd96e5f73b3f5d9'})
    .then((todo) => {

    });
// Todo.findByIdAndRemove('5ad8626abfd96e5f73b3f5d9').then((todo) => {
//     console.log(todo);
// })