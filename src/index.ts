// let sales = 123_456_789;
// let course = "TypeScript";
// let is_published = true;
// let level;
// level = 1;
// level = "a"; //TODO: This will result in an error.
// //TODO: If you know what you're doing you can change it in tsconfig file
// // Go to /* Type Checking */ set if to false
// // "noImplicitAny": true,

// let numbers: number[] = [1, 2, 3, "4"]; // set type of array to only numbers

// let array: number[] = [];
// array.forEach((n) => n.); // using (n.) to activate code completion / intellisense

// let user: [number, string] = [1, 'Sun'] // This is tuple

// PascalCase
// const enum Size {
//   Small = 1,
//   Medium,
//   Large,
// }
// let mySize: Size = Size.Medium;
// console.log(mySize);

function calculateTax(income: number, taxYear: number): number {
  // TODO: this means that the fucntion will return a value with a type of a number
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}
// TODO: the reason why it marked as error is because in JS if there is one condition the fucntion will return an undefined value by default which is not a number.
// But if we remove the :number from the function there will be no error cuz we haven't config it in tsconfig file

calculateTax(10_000, 2);

// Object
// let employee: {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// } = { id: 1, name: "Sun", retire: (date: Date) => console.log(date) }; // the ? mark makes the property optional
// // readonly to make the property unchangable

let a = 100; // number
let b = "Coffee"; // string
let c = [true, false, true]; // boolean []
let d = { age: 20 }; // {age: 20}
let e = [3]; // number []
let f; // any
let g = []; // any []

// let song: {
//   title: string;
//   releaseYear: number;
// } = { title: "My song" };
