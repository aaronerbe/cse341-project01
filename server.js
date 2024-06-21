const express = require('express');
const mongodb = require('./db/database');
const bodyParser = require('body-parser');
//Swagger Implementation
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express(); //launch instance of express

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.PORT || 3000; //process.env.PORT allows servers to use it, e.g. Azure, etc

app.use(bodyParser.json());
app.use('/', require('./routes'));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Database is listening on ${port}`);
    });
  }
});

//app.listen(port, () => {console.log(`Running on port ${port}`)});   //listens to web traffic on the port
