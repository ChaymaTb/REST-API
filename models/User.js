const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    last_name: String,
    first_name: String,
    age: Number,
    email: String
});

const User = mongoose.model('user',  userSchema);

module.exports = User;