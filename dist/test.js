"use strict";
// Boolean
var isDone = false;
// Number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// String
var color = "blue";
color = 'red';
// Array
var list = [1, 2, 3];
var listGeneric = [1, 2, 3];
// Tuple
var x;
x = ["hello", 10]; // OK
// x = [10, "hello"]; // Error
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
// Any
var notSure;
;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
notSure = 12;
// Unknown
var notSure2;
notSure2 = "maybe a string instead";
notSure2 = false; // okay, definitely a boolean 
// Void
function warnUser() {
    console.log("This is my warning message");
}
// Null and Undefined
var u = undefined;
var n = null;
// Never
function error(message) {
    throw new Error(message);
}
create({ prop: 0 }); // OK
create(null); // OK
var xx = !!1;
// npx tsc --watch
