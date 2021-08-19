/* Properties */

interface Animal {
    name: string;
    numberOfLegs: number;
}

//*******Instantiation is not allowed: will throw an error immediately
//let a: Animal = new Animal();

let lassie: Animal = {
    name: 'Lassie',
    numberOfLegs: 4
}


/* Methods */
//Interfaces have methods, but they can only have method signatures, not the implementation of the method