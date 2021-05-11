const chalk = require('chalk');

exports.helloWorld = function (name) {
    console.log(chalk.red(`Hello World By: ${name}`));
};