/* Annotations */
//Type Safe Arguments -- allows us to bring types to our parameters and limits to the number of arguments we pass in
function addNumbers(numOne, numTwo) {
    return numOne + numTwo;
}
//Works
addNumbers(1, 2);
//Will throw an error
// addNumbers(1, 2, 3);
// addNumbers(1, 2, 'meow');
var myFullName = function (firstName, lastName) {
    var fullname = firstName + " " + lastName;
    return fullname;
};
// console.log(myFullName('Chris', 'Blake'));
/* Return Types */
// 1. We create a type for our parameter, a string.
// 2. We use the colon followed by a type to denote a return type
//1         //2
function sayHello(name) {
    return name;
}
//3. We call the function and pass in a string argument. The argument satisfies the return type. So this function works.
//4. We call the function and pass in the wrong return type. The argument does not satisfy the return type, and so this would break.
sayHello('Kenn'); //3
// sayHello(1); //4
var checkerFunc = function (username, password) {
    if (username == 'elevenfiftyuser' && password == 'noneyabusiness') {
        return true;
    }
    else {
        return false;
    }
};
// console.log(checkerFunc('elevenfiftyuser', 'noneyabusiness'));
/* Optionals */
//Optionals allow for flexibility in our parameters. With optionals we can allow an argument to be left out if 
//needed. Optionals are declared using a question mark after them
//KEY RULE***** OPTIONAL PARAMS MUST GO AFTER ALL REQUIRED PARAM
function addNumbersWithOptional(numOne, numTwo, someString) {
    console.log(someString);
    return numOne + numTwo;
}
// console.log(addNumbersWithOptional(1, 2)); // w/o optional
// console.log(addNumbersWithOptional(1, 2, 'this is an optional'));// w/ optional
var optionalFunc = function (first, last, middle) {
    if (middle) {
        return first + " " + middle + " " + last;
    }
    else {
        return first + " " + last;
    }
};
// console.log(optionalFunc("Chris", "Blake", "Duane"));
// console.log(optionalFunc("Chris", "Blake"));
//# sourceMappingURL=02-functions.js.map