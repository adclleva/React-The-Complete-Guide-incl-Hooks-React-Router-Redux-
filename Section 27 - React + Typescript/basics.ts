// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives
// we use the primitive type (lowercase - ex: number, string)
let age: number = 24;

age = 23;

let userName: string;

let isInsctructor: boolean;

// More complex types

// array of strings
let hobbies: string[];
hobbies = ["a", "b"];

// it could be anything but defeats the purpose
let anything: any;

// type to define an object, object type definition
let person: {
  name: string;
  age: number;
};

person = {
  name: "bob",
  age: 32,
};

// this would give an error
// person = {
//   isEmployee: true
// }

// type to define an array of objects
let people: {
  name: string;
  age: number;
}[];
