const { createFile } = require('./helpers/multiplication');

const argv = require('./config/yargs');

console.clear();

createFile(argv.base, argv.list, argv.hasta).then(createFileName => console.log(createFileName + "creado")).catch(error => console.log(error));
