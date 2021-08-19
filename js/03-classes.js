/* Properties */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.sayHello = function () {
        console.log("Hello, " + this.firstName);
    };
    Person.prototype.sayHelloFull = function () {
        console.log("Hello, " + this.firstName + " " + this.lastName);
    };
    return Person;
}());
var kenn = new Person();
kenn.firstName = 'Kenn';
kenn.lastName = 'McBride';
// kenn.sayHello();
// kenn.sayHelloFull();
/* Constructors */
//A constructor allows us to more easily and efficiently create an instance of a class by 
//enabling us to instantiate the class(create a new instance of the class) and set the properties at the same time.
var Game = /** @class */ (function () {
    function Game(name, maker) {
        this.gameName = name;
        this.gameMaker = maker;
    }
    return Game;
}());
var battleship = new Game('Battleship', 'Hasbro');
// console.log(battleship)
/* Inheritance */
// Allows subclasses to "inherit" properties from the parent class while also having the ability to have
// unique properties of their own
//Parent class
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    return Vehicle;
}());
//Vehicle subclass
var BatMobile = /** @class */ (function (_super) {
    __extends(BatMobile, _super);
    function BatMobile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BatMobile;
}(Vehicle));
//Example1
var myCar = new BatMobile();
myCar.isSelfDriving = false;
myCar.topSpeed = 200;
myCar.make = 'Lambo Tank';
// console.log(myCar);
//Example 2
var MotorCycle = /** @class */ (function (_super) {
    __extends(MotorCycle, _super);
    function MotorCycle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MotorCycle;
}(Vehicle));
var myMotorCycle = new MotorCycle();
myMotorCycle.type = 'Harley';
myMotorCycle.runs = true;
myMotorCycle.easyToDoWHeelie = false;
// console.log(myMotorCycle);
/* Parameter Properties */
// Parameter properties allow us to make our classes even more streamlined by 
// allowing us to declare property types and accessors in our constructor parameters.
var StoreOne = /** @class */ (function () {
    function StoreOne(name, city) {
        this.name = name;
        this.city = city;
    }
    return StoreOne;
}());
var myStore = new StoreOne('IKEA', 'Fishers');
// console.log(myStore)
//Refactored Store class from above
var StoreTwo = /** @class */ (function () {
    function StoreTwo(name, city) {
        this.name = name;
        this.city = city;
    } //TypeScript infers that there is a property called name that will be the value of the argument that is passed into the constructor.
    return StoreTwo;
}());
var newStore = new StoreTwo('Galleria', 'Houston');
// console.log(newStore);
/* Accesors */
//1
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //5
    Employee.prototype.getSalary = function () {
        return this._salary.toString();
    };
    //4
    Employee.prototype.setSalary = function (newSalary) {
        this._salary = newSalary;
    };
    return Employee;
}(Person));
var newEmployee = new Employee();
newEmployee.setSalary(300000);
// newEmployee._salary = 0 // this breaks
var salaryResult = newEmployee.getSalary();
console.log("The salary for this position is: " + salaryResult);
// 1: We have a class called Employee that extends Person.
// 2: We create a private property, denoted by the private keyword
// 3: It is common practice to see private properties in classes start with an underscore. This is not required. It is just a common convention.
// 4: We have a method called  that takes in a number. It sets the value of the private property to the value that is passed in as an argument. These are both number types.
// 5:We have a method called  that returns a string. Inside the method, we perform so low-level business logic of
//   converting the salary number value to a string in the return statement.
//# sourceMappingURL=03-classes.js.map