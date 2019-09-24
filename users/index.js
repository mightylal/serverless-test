module.exports.handler = async (event, context) => {
    console.log('the event', event);
    console.log('context', context);
    console.log('testimm');

    return JSON.stringify({
        result: 'This is a test',
        poop: 'what the fudge',
    });
};
