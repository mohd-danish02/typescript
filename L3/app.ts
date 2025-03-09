// union
// literal types
// type alias / surtom types

// let firstName: string;
// let age: number;

// (firstName = "Danish"), (age = 23);

// console.log(firstName);

// console.log(age);

// const persone: Object = {
//   firstName: "Danish",
//   lastName: "Khan",
//   age: 123,
// };
// console.log(persone.firstName);
// console.log(persone.lastName);
// console.log(persone.age);

// concept of union  | pipe is called union

// function addConcat(num1: number | string, num2: number | string) {
//   return num1 + " " + num2;
// }

// console.log(addConcat(10, 20));
// console.log(addConcat("Danish", "Khan"));

// literal type we use | symbol made from unioun

// function AdditionOfTwo(num1: number, num2: number) {
//   let result;
//   if (typeof num1 == "number" && typeof num2 === "number") {
//     result = num1 + num2;
//   } else {
//     result = num1.toString() + " " + num2.toString();
//   }
//   return result;
// }

// console.log(AdditionOfTwo(12, 12));
// console.log(AdditionOfTwo("danish", "ali"));

// function combine(
//   num1: number | string,
//   num2: number | string,
//   conversionType: "as-number" | "as-string"
// ) {
//   let result;
//   if (
//     (typeof num1 === "number" && typeof num2 === "number") ||
//     conversionType === "as-number"
//   ) {
//     result = +num1 + +num2;
//   } else {
//     result = num1.toString() + num2.toString();
//   }
//   return result;
// }
// const sum1 = combine("10", "20", "as-number");
// const sum2 = combine("danish", "Khan", "as-string");
// console.log(sum1);
// console.log(sum2);

// type alias / custome alias ;

// type Combineable = number | string | boolean | string[];
// type ConversionType = "as-number" | "as-string";

// function combine(
//   num1: Combineable,
//   num2: Combineable,
//   conversionType: ConversionType
// ) {
//   let result;
//   if (
//     (typeof num1 === "number" && typeof num2 === "number") ||
//     conversionType === "as-number"
//   ) {
//     result = +num1 + +num2;
//   } else {
//     result = num1.toString() + num2.toString();
//   }
//   return result;
// }
// const sum1 = combine("10", "20", "as-number");
// const sum2 = combine("danish", "Khan", "as-string");
// console.log(sum1);
// console.log(sum2);

type User = {
  name: string;
  age: number;
  skills: string[];
};

const user: User = {
  name: "Danish",
  age: 22,
  skills: ["Nodejs", "TypeScript", "React"],
};

console.log(user.skills[0]);
console.log(user.name);

function greet(user: User) {
  console.log(`Hi , I am ${user.name}`);
}
greet(user);
