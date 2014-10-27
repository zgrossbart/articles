function test() {
    var myVar = 'Hello, World';
    console.log(myvar);
}

var nOne = 1;
var sOne = '1';

if (nOne == sOne) {
    alert('The two values were equal');
}

if (nOne === sOne) {
    alert('The two values were equal');
}

function incrementCount(counter) {
    if (counter.count) {
        counter.count++;
    } else {
        var counter = 1;
        counter.count = counter;
    }    
}