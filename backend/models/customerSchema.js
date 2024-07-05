const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    creditCard: {
        type: Number,
        required: true
    },
    paket: {
        type: String,
        required: true
    },
    harga: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const customers = mongoose.model('customers', customerSchema);

module.exports = customers;
