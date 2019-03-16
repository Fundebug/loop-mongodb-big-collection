const Promise = require("bluebird");
const mongoose = require("mongoose");

const conn = require("../mongodbConnection");

mongoose.Promise = Promise;

const Schema = mongoose.Schema;

var MemberSchema = new Schema({
    name: String,
    email: String,
    city: String,
    country: String,
    company: String
});

module.exports = conn.model("Member", MemberSchema);
