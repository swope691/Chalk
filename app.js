const chalk = require('chalk');
const chalkAnimation = require('chalk-animation');
const rainbow = chalkAnimation.rainbow("hello")
console.log(chalk.bgBlue("hello world")); 

chalkAnimation.rainbow("helllo World");



setTimeout(() => {
    rainbow.stop(); // Animation stops
}, 1000);
 

 