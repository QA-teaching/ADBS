const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const user = require("./routes/user.routes");
const auth = require("./routes/auth.routes");

const connectDB = require("./config/db.config"); // Import the connectDB function

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', user);
app.use('/', auth);


// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to User Authenticvation Application application." });
});

// Use the connectDB function to establish the MongoDB connection
connectDB();

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
