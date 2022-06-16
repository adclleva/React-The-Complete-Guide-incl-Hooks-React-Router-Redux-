// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// *** Primitives
// we use the primitive type (lowercase - ex: number, string)
let age: number = 24;

age = 23;

let userName: string;

let isInsctructor: boolean;

// *** More complex types

// *** array of strings
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

// *** Type infernence
// ts tries to infer the type even though the dev didn't explicitly declare the type
let course = "string";

// this would show an error in the code editor
// course = 12

// *** Union Types
let union: string | number | boolean[] = "test";
union = 3;
union = [true, false];

// *** Type Aliases

type PersonAlias = {
  name: string;
  age: number;
};

let bob: PersonAlias;

let bobs: PersonAlias[];

// *** Functions & Types

function add(a: number, b: number) {
  return a + b; // TS infers that the return type is a number
}

function subtract(a: number, b: number): number {
  // we can also determine the return type
  return a - b;
}

function printOutput(value: any) {
  // the inferred type is void since it doesn't return anything
  console.log(value);
}
