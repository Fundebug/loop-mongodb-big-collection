const Promise = require("bluebird");
const MemberProxy = require("./models/member/member.proxy");

async function test1() {
    const members = await MemberProxy.findAllMembers();
    let N = 0;
    await Promise.mapSeries(members, member => {
        N++;
    });
    console.log(`loop all ${N} members success`);
}

test1();
