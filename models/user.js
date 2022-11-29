const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please enter your username'],
        maxLength: [30, 'Your name cannot exceed 30 characters']
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],
        minlength: [6, 'Your password must be longer than 6 characters'],
        select: false
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: true,
        validate: [validator.isEmail, 'Please enter valid email address']
    },
    contact_name: {
        type: String,
        required: [true, 'Please enter your contact name'],
        maxLength: [20, 'Your name cannot exceed 20 characters']
    },
    contact_number: {
        type: String,
        required: [true, 'Please enter your contact number'],
        maxLength: [25, 'Your name cannot exceed 25 characters']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);