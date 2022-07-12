// Booleans
var isDone = false;
isDone = true;
// Number
var price = 10;
//String
var first_name = "Masai";
var last_name = "School";
var full_name = "".concat(first_name, "_").concat(last_name); //Inference check from the values
//Array
var arr1 = [1, 2, 4, 3, 5];
var arrayOfStrings = ["aakash", "kushwaha"];
arrayOfStrings.push("masai");
var masai = {
    first_name: "masai ",
    last_name: "school",
    age: 4
};
// question mark ? in age in person is for it may be contain age or not and if it does that will be number
var arrOfPerson = [
    { first_name: "a", last_name: "b", age: 5, isWorking: false },
    { first_name: "c", last_name: "b", isWorking: false },
];
// Now arrOfPerson only take the values in the form of obj person and keys and values
// // interface person {
// //   first_name: string;
// //   last_name: string;
// //   age: number;
// // }
// const masai: person = {
//   first_name: "masai",
//   last_name: "school",
//   age: 3,
//   isWorking: true,
// };
// //Tuples - Arrays
// //1. The number of elements in the tuple is fixed
// //2. The types of elements are known in advance.
var tuple;
tuple = ["Masai", 3];
tuple.push(5);
// console.log(tuple);
// //Enums -> a group of named constants 
// enum ActionTypes {
//     LOGIN_REQ = "LOGIN_REQ", //0
//     LOGIN_SUCCESS= "LOGIN_SUCCESS", //1
//     LOGIN_FAILURE="LOGIN_FAILURE", //2
//   }
// console.log(ActionTypes)
// enum Color {
//   RED, //0
//   GREEN, //1
//   BLUE, //2
// }
// let greenColor = Color.GREEN;
// console.log(Color);
// //Others
// let u: undefined;
// let n: null;
// let a: any;
// //functions
// function sum(a: number, b: number):number {
//   return a + b;
// }
// console.log(sum(5,8))
// const sum = (a: number, b: number = 10): number => {
//   return a + b;
// };
// console.log(sum(2));
var printName = function (_a) {
    var first_name = _a.first_name, last_name = _a.last_name, age = _a.age, isWorking = _a.isWorking;
    console.log("".concat(first_name, "_").concat(last_name));
};
var person3 = {
    first_name: "Masai",
    last_name: "School",
    age: 3,
    isWorking: true
};
printName(person3);
// console.log(person3)
// //Union
var output;
output = ["Masai", 3];
var coder = {
    first_name: "masai",
    last_name: "school",
    isWorking: true,
    skills: "coding",
    quality: "archiving"
};
