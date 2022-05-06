
function fibonacci(number) {
    if (number == 0) {
        return 0
    }
    else if (number == 1) {
        return 1
    }
    else {
        return fibonacci(number-1) + fibonacci(number-2)
    }

    
}

const fs = require('fs');
var num = 0;
var fibonacci_num;

fs.readFile("input.txt", 'utf8', (err, data) => {
    if(err)
    {
        console.error(err);
        return;
    }
    
    num = parseInt(data);
    console.log("El numero en el archivo es... " + num)

    fibonacci_num = fibonacci(num)
    console.log("Su valor en la sucesion de Fibonacci es... F(" + num + ") = " + fibonacci_num)
      
});





