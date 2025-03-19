const MongoClient = require('mongodb').MongoClient
require('dotenv').config()


let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'rap'

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
        db.collection('rappers').find().sort({likes: -1}).toArray().then((result) => {
            console.log('i got a result from MongoDB!!!!', result)
        })
    })




