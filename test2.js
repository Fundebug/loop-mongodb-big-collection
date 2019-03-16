const MemberProxy = require("./models/member/member.proxy");

async function test() {
    const membersCursor = await MemberProxy.findAllMembersCursor();
    let N = 0;
    await membersCursor.eachAsync(member => {
        N++;
    });
    console.log(`loop all ${N} members success`);
}

test();
