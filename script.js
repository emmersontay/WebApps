//Adding a message
function helloworld(){
    let message = 'Hello World';
    if (true) {
        console.log('Hello World');

    }
}

//Add Name
function naming(){
    if (true) {
        let message = 'Welcome';
    }
    const name = 'Emmerson';
}

//Adding numbers
function compare() {
    const a = 'aa';
    const b = 'ab';
    if (a < b) {
        console.log(a + ' is less than ' + b);
    } else if (a > b) {
        console.log(a + ' is greater than ' + b);
    } else {
        console.log(a + ' and ' + b + ' are equal. ');
    }
}

//Adding Number
function addingnum() {
    const b = 'something';
    const a = `b is: ${b}`;
    console.log(a);

    let num = 1;
    console.log(typeof num);
    console.log(typeof num.toString());

    console.log(num + 1);
    console.log(num.toString() + 1);

    let stringInt = '2';
    console.log(parseFloat(stringInt) + 1);
}

//To Lowercase
function lowercase() {
    const userInput = 'Hello';
    if (userInput.toLowerCase() == 'hello') {
        console.log('lower case');
    } else {
        console.log('upper case');
    }
}

lowercase();

compare();

addingnum();

helloworld();

naming();
