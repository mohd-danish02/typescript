// union
// literal types
// type alias / surtom types
var user = {
    name: "Danish",
    age: 22,
    skills: ["Nodejs", "TypeScript", "React"],
};
console.log(user.skills[0]);
console.log(user.name);
function greet(user) {
    console.log("Hi , I am ".concat(user.name));
}
greet(user);
