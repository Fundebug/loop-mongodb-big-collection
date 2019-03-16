const Promise = require("bluebird");
const mongoose = require("mongoose");
mongoose.Promise = Promise;

const mongodbURI = "mongodb://localhost/test";

var conn = mongoose.createConnection(mongodbURI, { useNewUrlParser: true });

conn.on("connected", function() {
    console.log("connect to mongodb success");
});

module.exports = conn;
