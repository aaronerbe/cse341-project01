const router = require('express').Router(); //express method to handle routes

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.use('/users', require('./users')); //if url has /users, go to a ./users.js file

module.exports = router;
