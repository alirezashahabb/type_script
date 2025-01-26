// Boolean
let isDone: boolean = false;

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// String
let color: string = "blue";
color = 'red';

// Array
let list: number[] = [1, 2, 3];
let listGeneric: Array<number> = [1, 2, 3];

// Tuple
let x: [ a :  string,  b : number];
x = ["hello", 10 ]; // OK
// x = [10, "hello"]; // Error

// Union Type
let y: string | number;
y = "hello"; // OK
y = 10; // OK

// Enum
enum Color {
    Red = "red",
     Green = "green",
     Blue = "blue",
    }
let c: Color = Color.Green;

// Any
let notSure: any;;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
notSure = 12;

// Unknown
let notSure2: unknown ;
notSure2 = "maybe a string instead";
notSure2 = false; // okay, definitely a boolean 

// Void
function warnUser(): void {

   
    console.log("This is my warning message");
}

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// Never
function error(message: string): never {
    throw new Error(message);
}



// const asseration 
let xxx   = [12 ,6,8] as const;


// Object
declare function create(o: object | null): void;
create({ prop: 0 }); // OK
create(null); // OK


let xx : Boolean = !!1;


let yy : unknown  ; 

yy as number;

yy = 12;


// type alias
type xName = string;


let xxxx : xName = "hello";

// interface
interface LabelledValue {
    label: string;
    age : number;
}

let reza : LabelledValue = {label : "reza"  , age : 12};

console.log(reza.label);


//literal type
let x1 : "hello" = "hello";
let x2 : 12 = 12;


//utility type
interface Point {
    x: number;
    y: number;
}
let ali : Point = {x : 12 , y : 12};
console.log(ali.x);

// npx tsc --watch