const Member = require("./member.model");

exports.findAllMembers = function() {
    return Member.find();
};
