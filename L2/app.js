//objec array touple
console.log("lets 10 learn typescirpt");
var persone = {
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
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Author"] = 1] = "Author";
    Role[Role["User"] = 2] = "User";
})(Role || (Role = {}));
var User = {
    firstName: "danish",
    lastName: "Khan",
    age: 27,
    mobile: 3748724811,
    skills: ["Reactjs", "Nodejs", "Typescript"],
    product: ["iPhone 16"],
    role: Role.Admin,
};
