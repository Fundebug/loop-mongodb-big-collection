const MemberProxy = require("./models/member/member.proxy");

async function test() {
    const membersCursor = await MemberProxy.findAllMembersCursor();
    let N = 0;
    await membersCursor.eachAsync(member => {
        N++;
        console.log(`name of the ${N}th member: ${member.name}`);
    });
    console.log(`loop all ${N} members success`);
}

test();
