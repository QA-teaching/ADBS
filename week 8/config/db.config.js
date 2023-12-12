const db = require("../models");
const Role = db.role;
const dbURI = process.env.DBURI || 'mongodb://127.0.0.1:27017/School';

async function setupRolesInDB(count) {
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
}

const connectDB = async () => {
    db.mongoose.connect(dbURI)
    .then(async () => {
        console.log('Connected to the database');
        
        

        // Function to create 3 rows in the roles collection
        const count = await Role.estimatedDocumentCount();
        setupRolesInDB(count);
        

    })
    .catch((err) => {
        console.log("Connection error", err);
        process.exit();
    });
};

module.exports = connectDB;
