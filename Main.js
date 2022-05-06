const fs = require('fs');

var num;
var fibo_num;

fs.readFile("input.txt", 'utf8', (err, data) =>
{
    // if(err)
    // {
    //     console.error(err);
    //     return;
    // }
    num = parseInt(data);
    
});

console.log("El numero seleccionado es: " + num)



