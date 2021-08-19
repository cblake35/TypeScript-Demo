/* Properties */

//1 Using the  class keyword, we create a new class called Person
// class Person {
    //2 Create 2 properties with types. Must have string values
//     firstName: string;
//     lastName: string;
// }

//3 We instantiate(create an instance) of the class by setting the type to Person and calling
// the new keyword to create a new instance of the class.

//**** Instantiation means to create a new instance of a class
//Person is a custom type of Person(line 4)
// let phil: Person = new Person();

//we set the properties of the new instance class phil
// phil.firstName = 'Phil';
// phil.lastName = 'Doolittle';
// console.log(phil)


/* Methods */
//Methods can be described as functions inside the body of a class.

class Person {
    firstName: string;
    lastName: string;
    sayHello(){
        console.log(`Hello, ${this.firstName}`);
    }

    sayHelloFull(){
        console.log(`Hello, ${this.firstName} ${this.lastName}`);
    }
}

let kenn: Person = new Person();

kenn.firstName = 'Kenn';
kenn.lastName = 'McBride';
// kenn.sayHello();
// kenn.sayHelloFull();

/* Constructors */
//A constructor allows us to more easily and efficiently create an instance of a class by 
//enabling us to instantiate the class(create a new instance of the class) and set the properties at the same time.

class Game {
    constructor(name: string, maker: string) {
        this.gameName = name;
        this.gameMaker = maker;
    }
    gameName: string;
    gameMaker: string;
}

let battleship: Game = new Game('Battleship', 'Hasbro');
// console.log(battleship)


/* Inheritance */
// Allows subclasses to "inherit" properties from the parent class while also having the ability to have
// unique properties of their own

//Parent class
class Vehicle {
    type: string;
    make: string;
    model: string;
    manufactureYear: number;
    runs: boolean;
    topSpeed: number;
}

//Vehicle subclass
class BatMobile extends Vehicle {
    isSelfDriving: boolean;
}

//Example1
let myCar: BatMobile = new BatMobile();
myCar.isSelfDriving = false;
myCar.topSpeed = 200;
myCar.make = 'Lambo Tank'
// console.log(myCar);

//Example 2
class MotorCycle extends Vehicle {
    easyToDoWHeelie: boolean;
}

let myMotorCycle: MotorCycle = new MotorCycle();
myMotorCycle.type = 'Harley';
myMotorCycle.runs = true;
myMotorCycle.easyToDoWHeelie = false;
// console.log(myMotorCycle);


/* Parameter Properties */
// Parameter properties allow us to make our classes even more streamlined by 
// allowing us to declare property types and accessors in our constructor parameters.

class StoreOne {
    constructor(name: string, city: string){
        this.name = name;
        this.city = city;
    }
    name: string;
    city: string;
}

let myStore = new StoreOne('IKEA', 'Fishers');
// console.log(myStore)

//Refactored Store class from above
class StoreTwo {
    constructor( public name: string, public city: string){ //Adding the "public" accessor will negate the need for "this" keyword(this.name = name)
    }                                                       //TypeScript infers that there is a property called name that will be the value of the argument that is passed into the constructor.
}

let newStore = new StoreTwo('Galleria', 'Houston');
// console.log(newStore);


/* Accesors */
        //1
class Employee extends Person {
    //2         //3
    private _salary: number; //private allows the salary property to be specific to the Employee class only
    //5
    getSalary(): string {
        return this._salary.toString()
    }
            //4
    setSalary(newSalary: number) {
        this. _salary = newSalary;
    }
}

let newEmployee: Employee = new Employee();
newEmployee.setSalary(300000);
// newEmployee._salary = 0 // this breaks
let salaryResult: string = newEmployee.getSalary();
console.log(`The salary for this position is: ${salaryResult}`);

// 1: We have a class called Employee that extends Person.
// 2: We create a private property, denoted by the private keyword
// 3: It is common practice to see private properties in classes start with an underscore. This is not required. It is just a common convention.
// 4: We have a method called  that takes in a number. It sets the value of the private property to the value that is passed in as an argument. These are both number types.
// 5:We have a method called  that returns a string. Inside the method, we perform so low-level business logic of
//   converting the salary number value to a string in the return statement.



