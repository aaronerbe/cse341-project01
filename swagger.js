const swaggerAutogen = require('swagger-autogen')();
	
const doc = {
  info: {
    title: 'My API',
    description: 'Description'
  },
  host: 'localhost:3000'    /* change this to match path/port */
};

const outputFile = './swagger.json';
const routes = ['./routes/index.js'];

//const routes = ['./path/userRoutes.js', './path/bookRoutes.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);