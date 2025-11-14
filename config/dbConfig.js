require('dotenv').config();
const mongoose = require('mongoose');

const connectDb = () => {

    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });
}

module.exports = connectDb;