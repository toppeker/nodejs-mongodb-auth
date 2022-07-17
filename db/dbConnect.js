// external imports
const mongoose = require("mongoose");
require('dotenv').config()

async function dbConnect() {
    // use mongooose to connect this app to our db on mongoDB using the DB_URL (connection string)
    mongoose
        .connect(
            process.env.DB_URL
        )
        .then(() => {
            console.log("Successfully connected to MongoDB Atlas!");
        })
        .catch((error) => {
            console.log("Unable to connect MongoDB Atlas!");
            console.error(error);
        });
}

module.exports = dbConnect;