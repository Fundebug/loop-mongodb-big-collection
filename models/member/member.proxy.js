const Member = require("./member.model");

exports.findAllMembers = function() {
    return Member.find();
};

exports.findAllMembersCursor = function() {
    return Member.find().cursor();
};
