const mongodb = require('../db/database');
const ObjectId = require('mongodb').ObjectId;  //primarykey or unique id for all db entries
//const { ObjectId } = require('mongodb');

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


const createUser = async (req, res) => {
    //parsing body sent to function.  should match the database schema
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    }
    const response = await mongodb.getDatabase().db().collection('users').insertOne(user);
    if (response.acknowledged>0){
        res.status(204).send();
    }else{
        res.status(500).json(response.error ||  'Something went wrong while creating user');
    };
};

const updateUser = async (req, res) => {
    //get userid
    const userId = new ObjectId(req.params.id)
    //parsing body sent to function.  should match the database schema
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    }
    const response = await mongodb.getDatabase().db().collection('users').replaceOne({ _id: userId }, user);
    if (response.modifiedCount>0){
        res.status(204).send();
    }else{
        res.status(500).json(response.error ||  'Something went wrong while updating user');
    };
};

const deleteUser = async (req, res) => {
    //get userid
    const userId = new ObjectId(req.params.id)
    const response = await mongodb.getDatabase().db().collection('users').deleteOne({ _id: userId });
    if (response.deletedCount>0){
        res.status(204).send();
    }else{
        res.status(500).json(response.error ||  'Something went wrong while deleting user');
    };
};


module.exports = {
    getAll,
    getSingle,
    createUser,
    updateUser,
    deleteUser
}