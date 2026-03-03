//------------------------
// basic type annotations
//------------------------

let age: number = 300000;
let firstName: string = "Hello Mario";
let isFictional: boolean;

console.log(age);
console.log(firstName);
console.log(isFictional);
// age = 'hello'
age = 31;

// firstName = 100
firstName = "Luigi";

// isFictional = 'false'
isFictional = false;

//----------------
// type inference
//----------------

let planet = "Earth";
let moons = 1;
let isLarge = false;

// planet = 10
planet = "Saturn";

// moons = '145'
moons = 145;

// isLarge = 'yes'
isLarge = true;

//------------------
// null & undefined
//------------------

let something: null;
let anotherThing: undefined;

// something = 10
something = null;

// anotherThing = 'hello, world'
anotherThing = undefined;
