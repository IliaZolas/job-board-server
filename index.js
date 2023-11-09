const express = require("express");
const app = express();
const dotenv = require("dotenv");
const PORT = process.env.PORT || 4000;
const mongoose = require("mongoose");

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS)
.then(() => {
    console.log("mongodb connected");
})
.catch((error) => {
    console.log("error connecting to mongodb", error);
});

app.listen(PORT, () => console.log(`server is running on localhost:${PORT}`));