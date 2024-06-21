const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Description'
  },
//  host: 'localhost:3000' /* change this to match path/port */
  host: process.env.SWAGGER_HOST || 'localhost:3000', // Use environment variable or default to localhost
  schemes: process.env.SWAGGER_SCHEME ? [process.env.SWAGGER_SCHEME] : ['http'], // Use HTTPS if specified

};

const outputFile = './swagger.json';
const routes = ['./routes/index.js'];

//const routes = ['./path/userRoutes.js', './path/bookRoutes.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);
