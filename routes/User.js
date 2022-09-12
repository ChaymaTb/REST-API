const express = require('express');
const userRouter = express();
const User = require('../models/User')

// ADD A NEW USER TO THE DATABASE
userRouter.post('/', async (req, res) => {
    try {
        const newUser = new User(req.body)
        let result = await newUser.save();
        res.send(result)
    }
    catch (error) {
        console.log(error);
    }
});

// RETURN ALL USERS
userRouter.get('/', async (req, res) => {
    try {
        let result =await User.find();
        res.send(result)
    }
    catch (error) {
        console.log(error);
    }
});

//EDIT A USER BY ID
userRouter.put("/:id", async (req, res) => {
    try {
        let result = await User.findOneAndUpdate({
            id: req.params.id, $set: { ...req.body }
        });
        res.send({ newUser: result, msg: "user updated" })
    }
    catch (error) {
        console.log(error)
    }
});

//REMOVE A USER BY ID
userRouter.delete("/:id", async (req, res) => {
    try {
        let result = await User.findOneAndRemove({
            id: req.params.id
        });
        res.send({ msg: "User is deleted" })
    } catch (error) {
        console.log(error)
    }
});

module.exports = userRouter