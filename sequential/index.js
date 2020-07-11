const { taskOne, taskTwo } = require("./tasks");
const { promises } = require("fs");

const main = async () => {
  try {
      console.time('Measuring time');
      const resp = await Promise.all([taskOne(), taskTwo()]);
      console.timeEnd('Measuring time');

      console.log(`Task One Returned ${resp[0]}`);
      console.log(`Task Two Returned ${resp[1]}`);
  } catch (error) {
    console.log(error);
  }
};

main();
