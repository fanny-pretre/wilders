const chalk = require('chalk');
const information = ["Aurélien", "Fanny", "Laurent", "Simon"];

/*
for (let i = 0; i < information.length; i++) {
    console.log(chalk.blue(`Hello ${information[i]}`));
}*/

console.log(chalk.blue(`Hello ${information[0]}`));
console.log(chalk.red(`Hello ${information[1]}`));
console.log(chalk.green(`Hello ${information[2]}`));
console.log(chalk.yellow(`Hello ${information[3]}`));