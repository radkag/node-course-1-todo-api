const {mongoose} = require("../server/db/mongoose");
const {Todo} = require("../server/models/todo");

const id = "5a7473d5c4e289d212159339";

Todo.find({
    _id: id
}).then((todos) => {
   console.log("Todos", todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log("Todo", todo);
});

Todo.findById(id).then((todo) => {
    console.log("Todo By Id", todo);
});
