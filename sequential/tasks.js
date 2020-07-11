const util = require('util');
const sleep = util.promisify(setTimeout);

module.exports = {
    taskOne: async() => {
        await sleep(4000);    
        return 'ONE VALUE';
    }, 

    taskTwo: async() => {
        await sleep(2000);
        return 'TWO VALUE';
    }
}; 