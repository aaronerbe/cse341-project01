const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');

//Week01 - get
router.get('/', usersController.getAll);
router.get('/:id', usersController.getSingle);

//Week02 - Post/Put/Delete
router.post('/',usersController.createUser);
router.put('/:id',usersController.updateUser);
router.delete('/:id',usersController.deleteUser);

module.exports = router;