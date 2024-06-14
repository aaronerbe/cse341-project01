const express = require('express');

const mongodb = require('./db/database')
const app = express();  //launch isntance of express

const port = process.env.PORT || 3000; //process.env.PORT allows servers to use it, e.g. Asure, etc

app.use('/', require('./routes'));


mongodb.initDb((err) => {
    if(err) {
        console.log(err);
    }
    else {
        app.listen(port, () => {console.log(`Database is listening on ${port}`)})
    }
})

//app.listen(port, () => {console.log(`Running on port ${port}`)});   //listens to web traffic on the port