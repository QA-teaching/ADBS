exports.allAccess = (req, res) => {
    console.log("Request sent to '/api/test/all' endpoint");
    res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
    console.log("Request sent to '/api/test/user' endpoint");
    res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
    console.log("Request sent to '/api/test/admin' endpoint");
    res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
};
