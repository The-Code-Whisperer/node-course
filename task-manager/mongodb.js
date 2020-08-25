// CRUD create read update delete to manage data
// mongodb drivers are the library functions required to connect to mongodb, which comes in many languages including nodejs.

const mongodb = require('mongodb'); // object returning npm library
const { MongoClient, ObjectID } = require('mongodb'); // initialize mongodb connection, and working with object ids

const connectionURL = 'mongodb://127.0.0.1:27017' // connect to mongodb server. running in first terminal tab. could write localhost but it causes some unknown issues.
const databaseName = 'task-manager' // can be called anything

const id = new ObjectID() // this is needed for objectids since they aren't strings they're binary reps
// console.log(id);
// console.log(id.id.length)

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    console.log('Connected correctly')
    db = client.db(databaseName) // gives a database reference, telling WHICH database in this connection to use, and no need to create it, using it in the code is enough
    // db.collection('users').updateOne({
    //     _id: new ObjectID("5f3c2a9e60b73828907441fb")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then(() => {

    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('Text Documents').deleteOne({
        name: "Vikram"
    }).then(result => {
        console.log(result)
    }).catch(error => {
        console.log(error)
    })
})

 //sets up connection, reference the URL in first argument, second argument needs options object, here with single option because the old url parser is deprecated. Last is a callback function which runs when connected to the database. Connecting to the db is an asynchronous operation.
