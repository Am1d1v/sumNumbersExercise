const sumNumbers = function(){
    let sum = 0;
    //console.log(arguments)
    //console.log(arguments.length)
    for(let i = 0; i < arguments.length ; i++){
        //console.log(arguments[i]);
        sum = sum + arguments[i];
        console.log(`Variable sum has value ${sum} now`);
        
    }
    //console.log(sum);
}

//sumNumbers(3, 5);
//sumNumbers(3, 5, 10, 100, 150);
sumNumbers(3, 5, 10, 100);