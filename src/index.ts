// Basic types
let id: number = 5;
let company: string = "Base 3";
let isPublished: boolean = true;
let x: any = "Hola";
let age: number;

let ids: number[] = [1, 2, 3, 4, 5];
// ids.push("Hello");
let arr: any[] = [1, true, "hola"];

// Typle
let person: [number, string, boolean] = [1, "Aro", true];
// Tuple Array
let employee: [number, string][];

employee = [
  [0, "Aro"],
  [1, "Alba"],
  [2, "Fatima"],
];

// Union
let pid: string | number = 22;

// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}
enum Direction2 {
  Up = "Down",
  Down = "Up",
  Left = "Right",
  Right = "Left",
}

// Objects
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "John",
};

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}
//Use void when there is no return
function log(message: string | number): void {
  console.log(message);
}

// Interfaces - used mostly with objects, use type for primitives and unions
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}
interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

const user1: UserInterface = {
  id: 1,
  name: "Aro",
};

type Point = number | string;

interface MathFunc {
  (x: number, y: number): number;
}
const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// Classes
class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
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
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const empl = new Employee(3, "Gustav", "Janitor");

console.log(empl);

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["Aro", "Alba", "Igor", "Fatima"]);

numArray.push("Hola");
