const fs = require('fs');

const colors = require('colors');


const createFile = async (base = 5, list = false, hasta) => {
  multiplicationTable = '';
  output = '';
  for (let i = 1; i <= hasta; i++) {
    multiplicationTable += `${base} x ${i} = ${base * i}\n`;
    output += `${base.toString().green} ${'x'.blue} ${i.toString().green} ${'='.blue} ${(base * i).toString().green}\n`;
  }
  if (list) {
    console.log('==============================='.green);
    console.log('     TABLA DEL '.green, base);
    console.log('==============================='.green);
    console.log(output);
  }
  fs.writeFileSync(`./salida/multiplication_table_${base}.txt`, multiplicationTable);
  return `multiplication_table_${base}.txt`.rainbow;
}

module.exports = {
  createFile
}
