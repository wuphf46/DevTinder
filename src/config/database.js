const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://yashkamal1810:TeYxtkuDM57vhMVg@namastenode.ohbwo8j.mongodb.net/devTinder"
    );
};

module.exports = connectDB;
