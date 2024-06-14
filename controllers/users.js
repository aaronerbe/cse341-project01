const mongodb = require('../db/database');
const ObjectId = require('mongodb').ObjectId;  //primarykey or unique id for all db entries

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('users').find();
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users);
    });    
}

const getSingle = async (req, res) => {
    const userId = new ObjectId(req.params.id)
    const result = await mongodb.getDatabase().db().collection('users').find(userId);
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users[0]);
    });
}

module.exports = {
    getAll,
    getSingle
}