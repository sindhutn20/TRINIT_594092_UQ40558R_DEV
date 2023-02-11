const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.set('strictQuery', false);

mongoose.connect("mongodb://localhost:27017/testdb", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connection Successful"))
    .catch((err) => console.log(err));

const userList = new mongoose.Schema({
    _id: Number,
    name: String,
    phone: Number,
    email: String
})

const User = new mongoose.model("User", userList);

// const user1 = new User({
//     _id: 1,
//     name: "Afroz",
//     phone: 123456,
//     email: "afroz@gmail.com"
// });

// user1.save();

const createUser = async (_id, name, phone, email) => {
    try {
        const user1 = new User({
            _id: _id,
            name: name,
            phone: phone,
            email: email
        });

        const result = await user1.save();
        // console.log(result);
    } catch (err) {
        console.log(err);
    }
}
// createUser();

const createUsers = async () => {
    try {
        const user1 = new User({
            _id: 1,
            name: "Afroz",
            phone: 98765,
            email: "afroz@gmail.com",
            age: 20
        });

        const user2 = new User({
            _id: 3,
            name: "Nagesh",
            phone: 454545,
            email: "nagesh@gmail.com"
        });
        const user3 = new User({
            _id: 4,
            name: "VDS Krishna",
            phone: 897887,
            email: "vds@gmail.com"
        });

        const result = await User.insertMany([user1, user2, user3]);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

// createUsers();

const readUsers = async () => {
    try {
        const result = await User.find();
        // console.log(result);
        return result;
    } catch (err) {
        console.log(err);
    }
}

const readUserById = async (_id) => {
    try {
        const result = await User.find({ _id });
        // console.log(result);
        return result;
    } catch (err) {
        console.log(err);
    }
}
// // readUsers();
const updateUser = async (_id, name, phone, email) => {
    try {
        // const result = await User.updateOne({ _id }, { $set: { email: "afroz123@gmail.com" } })
        const result = await User.findByIdAndUpdate({ _id }, { $set: { email: email, phone: phone, name: name } })
        // console.log(result);
        return result;
    } catch (err) {
        console.log(err);
    }
}
// updateUser(2)

const deleteUser = async (_id) => {
    try {
        const result = await User.deleteOne({ _id });
        return result;
    } catch (err) {
        console.log(err);
    }
}
// deleteUser(1);
// app.listen('3000', () => console.log("server started at port 3000"))

module.exports.createUser = createUser;
module.exports.readUsers = readUsers;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
module.exports.readUserById = readUserById;

