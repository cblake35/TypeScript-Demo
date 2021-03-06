

    //1         //2         //3
let username: string = 'instructor';
let password: string = 'Letmein1234!'
let instructorId: number = 5;

//1 Declare a variable
//2 Declare the variable type
//3 Initialize the variable with a value of that type


//Value and type can also be declared without initialization
let phoneNumber: number;
let email: string;
let socialSecurityNumber: number;
let isMarried: boolean;

//Implicit typing - a variable type is not declared
let greeting = 'Hello';

//Primitive Types

//Number
let myNumber: number = 35;
let hex: number = 0xf00d;

//String
let myString: string = `Hi, I'm a string.`;

//Boolean
let isTrue: boolean = true;
let isFalse: boolean = false;

//Array(can be expressed in two different ways)
let studentList: string[] = ['Tom', 'Ben', 'Jerry']; //1
let allScores: Array<number> = [1, 22, 33, 44];

let newArray: object = { //object data type example
    user: {
        username: 'username',
        password: 'password',
    }
}

//Any type - can be used if the type is not known during early development
let dataFromThirdParty: any = '12345';
// console.log(dataFromThirdParty);
// console.log(typeof dataFromThirdParty);

// let dataFromThirdParty: any = 12345;
// console.log(dataFromThirdParty);
// console.log(typeof dataFromThirdParty);

//Void type - has no type. More commonly seen in functions than variables
function sayHelloToAll(): void {
    console.log('Hello to all');
}

//Null and Undefined
let undefinedVariable: undefined = undefined;
let nullVariable: null = null;

//Tuple Type - allows a creation of an array with multiple different types
//declare a tuple type
let usernameAndId: [number, string];
//Initialize it
usernameAndId = [1, 'kennisreally40']; //Needs to follow the pattern of the variable. ['kenny', 2] would throw an error. 

//Enum - enables naming for numeric values
enum WeaponType {Sword, Saber, Spear}
let weapon: WeaponType = WeaponType.Sword
//similar to arrays, enums start at 0 unless assigned a different number
enum CardType { Ace = 1, Two, Three, Four}
let cardType: string = CardType[2]
console.log(cardType)

//Union Types - allows the ability for a variable to have more than one type
let x: number | string;
let y: number | null;

x = '1234';
x = 1234;

