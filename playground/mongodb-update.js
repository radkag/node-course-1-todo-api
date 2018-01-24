const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (error, db) => {
    if (error) {
        return console.log("Unable to connect to MongoDB server")
    }

    console.log("Connected to MongoDB server");

    // // find one and update
    // db.collection("Todos").findOneAndUpdate({
    //     text: "eat lunch"
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //         console.log(result)
    // });

    db.collection("Users").findOneAndUpdate({
        name: "Andrew"
    }, {
        $set: {
            name: "John"
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    });

    // db.close();
});