//objec array touple
console.log("lets 10 learn typescirpt");

const persone: {
  firstName: string;
  lastName: string;
  age: number;
  mobile: number;
  address: {
    galiNo: number;
    area: string;
    landmark: string;
  };
  skills: string[];
  sattaNo: number[];
  product: [number, string, boolean];
} = {
  firstName: "Danish",
  lastName: "Khan",
  age: 23,
  mobile: 7505426809,
  address: {
    galiNo: 63,
    area: "baksar ramlila ground",
    landmark: "Mahant ji ki haweli",
  },
  skills: ["Reactjs", "TypeScript", "Nodejs"],
  sattaNo: [11, 22, 33, 44, 55],
  product: [11, "cricket", true],
};
console.log(persone.address.area);
console.log(persone.skills[2]);
console.log(persone.sattaNo[4]);

// let fruits: string[] = ["apple", "banana", "orange", "grapes"];
// console.log(fruits[0]);
// console.log(persone.product[2]);

enum Role {
  Admin,
  Author,
  User,
}
const User: {
  firstName: string;
  lastName: string;
  age: number;
  mobile: number;
  skills: string[];
  product: string[];
  role: Role;
} = {
  firstName: "danish",
  lastName: "Khan",
  age: 27,
  mobile: 3748724811,
  skills: ["Reactjs", "Nodejs", "Typescript"],
  product: ["iPhone 16"],
  role: Role.Admin,
};
