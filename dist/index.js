"use strict";
// Basic types
let id = 5;
let company = "Base 3";
let isPublished = true;
let x = "Hola";
let age;
let ids = [1, 2, 3, 4, 5];
// ids.push("Hello");
let arr = [1, true, "hola"];
// Typle
let person = [1, "Aro", true];
// Tuple Array
let employee;
employee = [
    [0, "Aro"],
    [1, "Alba"],
    [2, "Fatima"],
];
// Union
let pid = 22;
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Down";
    Direction2["Down"] = "Up";
    Direction2["Left"] = "Right";
    Direction2["Right"] = "Left";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: "John",
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid;
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
//Use void when there is no return
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "Aro",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        console.log("Aro in the house");
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const aro = new Person(1, "Aro");
const alba = new Person(2, "Alba");
console.log(aro.register());
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const empl = new Employee(3, "Gustav", "Janitor");
console.log(empl);
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["Aro", "Alba", "Igor", "Fatima"]);
numArray.push("Hola");
