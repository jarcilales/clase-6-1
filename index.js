



var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt("Que tabla quieres");
rl.prompt();
for(let i=1;i<=10;i++){
console.log(`El resultado de ${rl} por ${i} es ${rl*i}`)
}