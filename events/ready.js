module.exports = {
    run: (client) => {
        console.log(`Logged in as ${client.user.tag}`);
        client.user.setPresence({status: 'invisible' });
    }
};
