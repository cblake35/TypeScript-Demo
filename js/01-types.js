//1         //2         //3
var username = 'instructor';
var password = 'Letmein1234!';
var instructorId = 5;
//1 Declare a variable
//2 Declare the variable type
//3 Initialize the variable with a value of that type
//Value and type can also be declared without initialization
var phoneNumber;
var email;
var socialSecurityNumber;
var isMarried;
//Implicit typing - a variable type is not declared
var greeting = 'Hello';
//Primitive Types
//Number
var myNumber = 35;
var hex = 0xf00d;
//String
var myString = "Hi, I'm a string.";
//Boolean
var isTrue = true;
var isFalse = false;
//Array(can be expressed in two different ways)
var studentList = ['Tom', 'Ben', 'Jerry']; //1
var allScores = [1, 22, 33, 44];
var newArray = {
    user: {
        username: 'username',
        password: 'password',
    }
};
//Any type - can be used if the type is not known during early development
var dataFromThirdParty = '12345';
// console.log(dataFromThirdParty);
// console.log(typeof dataFromThirdParty);
// let dataFromThirdParty: any = 12345;
// console.log(dataFromThirdParty);
// console.log(typeof dataFromThirdParty);
//Void type - has no type. More commonly seen in functions than variables
function sayHelloToAll() {
    console.log('Hello to all');
}
//Null and Undefined
var undefinedVariable = undefined;
var nullVariable = null;
//Tuple Type - allows a creation of an array with multiple different types
//declare a tuple type
var usernameAndId;
//Initialize it
usernameAndId = [1, 'kennisreally40']; //Needs to follow the pattern of the variable. ['kenny', 2] would throw an error. 
//Enum - enables naming for numeric values
var WeaponType;
(function (WeaponType) {
    WeaponType[WeaponType["Sword"] = 0] = "Sword";
    WeaponType[WeaponType["Saber"] = 1] = "Saber";
    WeaponType[WeaponType["Spear"] = 2] = "Spear";
})(WeaponType || (WeaponType = {}));
var weapon = WeaponType.Sword;
//similar to arrays, enums start at 0 unless assigned a different number
var CardType;
(function (CardType) {
    CardType[CardType["Ace"] = 1] = "Ace";
    CardType[CardType["Two"] = 2] = "Two";
    CardType[CardType["Three"] = 3] = "Three";
    CardType[CardType["Four"] = 4] = "Four";
})(CardType || (CardType = {}));
var cardType = CardType[2];
console.log(cardType);
//Union Types - allows the ability for a variable to have more than one type
var x;
var y;
x = '1234';
x = 1234;
//# sourceMappingURL=01-types.js.map