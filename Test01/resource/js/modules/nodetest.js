
//Testing set interval and clear interval
//variables can reference functions
var time = 0;
var func = setInterval(function(){
    time += 1;
    if(time == 5){
        clearInterval(func);
    }
    console.log("Hello World! line number " + time)   
    //note: even when time becomes 5, the loop doesnt end and runs all the way through  
}, 1000);

//make variables and functions usable in other node modules
module.exports = time;
