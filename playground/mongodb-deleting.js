const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (error, db) => {
    if (error) {
        return console.log("Unable to connect to MongoDB server")
    }

    console.log("Connected to MongoDB server");

    // // delete many
    // db.collection("Todos").deleteMany({text: "eat lunch"}).then((result) => {
    //     console.log(result)
    // });

    // // delete one
    // db.collection("Todos").deleteOne({text: "eat lunch"}).then((result) => {
    //     console.log(result)
    // });

    // // find one and delete
    // db.collection("Todos").findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result)
    // });

    // db.close();
});