const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./models");
const Role = db.role;

const user = require("./routes/user.routes");
const auth = require("./routes/auth.routes");

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

//mongoDB connection URI, remember to change 'password' with your password and myFirstDatabase with your database name
const dbURI = 'mongodb://127.0.0.1:27017/School';

//using mongoose to connect to MongoDB, the last two option to avoid deprecation warnings.
db.mongoose.connect(dbURI)
    .then(async () => {
        console.log('Connected to the database');
        
        

        // Function to create 3 rows in the roles collection
        const count = await Role.estimatedDocumentCount();

        if (count === 0) {
            await new Role({
                name: "admin"
            }).save();

            await new Role({
                name: "user"
            }).save();

            await new Role({
                name: "moderator"
            }).save();

            console.log("Added 'admin', 'user' and 'moderator' to roles collection");
        }

    })
    .catch((err) => {
        console.log("Connection error", err);
        process.exit();
    });

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
