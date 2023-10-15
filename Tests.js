"use strict";
// Question 23:
let car = "subaru";
console.log("Is `car` == `subaru`? I predict true.");
console.log(car == "subaru");
let car2 = "dune_buggy";
console.log("Is `car` == `dune_buggy`? I predict true.");
console.log(car2 == "dune_buggy");
let car3 = "luxury_car";
console.log("Is `car` == `luxury_car`? I predict true.");
console.log(car3 == "luxury_car");
let car4 = "toy_car";
console.log("Is `car` == `toy_car`? I predict true.");
console.log(car4 == "toy_car");
let car5 = "Sentricon";
console.log("Is `car` == `sentricon`? I predict false.");
console.log(car5 == "sentricon");
let car6 = "bmw";
console.log("Is `car` == `Lamborghini`? I predict false.");
console.log(car6 == "BMW");
let car7 = "Mercedes";
console.log("Is `car` == `monster truck`? I predict false.");
console.log(car7 == "mercedes");
let car8 = "Lamborghini";
console.log("Is `car` == `subaru`? I predict false.");
console.log(car8 == "lamborghini");
24;
let paint1 = "orange";
console.log("Is `paint1` == `orange`? I predict true.");
console.log(paint1 == 'orange');
let paint2 = "pink";
console.log("Is `paint2` == `pink`? I predict false.");
console.log(paint2 == "pink");
let lowercasetest = "Wasay";
if (lowercasetest == lowercasetest.toLowerCase()) {
    console.log(true);
}
else {
    console.log(false);
}
let lowercasetest2 = "wasay";
if (lowercasetest == lowercasetest.toLowerCase()) {
    console.log(true);
}
else {
    console.log(false);
}
let n = 5;
let num1 = (n < 5);
console.log(num1);
let num2 = (n <= 5);
console.log(num2);
let num3 = (n > 5);
console.log(num3);
let num4 = (n >= 5);
console.log(num4);
let num5 = (n != 5);
console.log(num5);
let num6 = (n == 5);
console.log(num6);
let num7 = (n === 5);
console.log(num7);
let num8 = (n !== 5);
console.log(num8);
let num9 = (n < 5 || n > 5);
console.log(num9);
let num10 = (n > 5 || n <= 5);
console.log(num10);
let num11 = (n != 1 && n >= 100);
console.log(num11);
let num12 = (n < 5 && n > 100);
console.log(num12);
let arr3 = [`Eric`, `Daniel`, `Hamzah`];
console.log(arr3.includes("Eric"));
console.log(arr3.includes("Tiphany"));
25;
let alien_color1 = "green";
if (alien_color1 == "green") {
    console.log(`You got 5 points!`);
}
else {
    console.log("You got 10 points!");
}
26;
let alien_color2 = "green";
if (alien_color2 == "green") {
    console.log(`You got 5 points!`);
}
else if (alien_color2 != "green") {
    console.log("You got 10 points!");
}
27;
let alien_color = "green";
if (alien_color == "green") {
    console.log(`You got 5 points!`);
}
else if (alien_color == "yellow") {
    console.log("You got 10 points!");
}
else if (alien_color == "red") {
    console.log(`You got 15 points!`);
}
28;
let age = 2;
if (age >= 0 && age < 3) {
    console.log(`Baby!`);
}
else if (age >= 3 && age < 7) {
    console.log(`Toddler!`);
}
else if (age >= 7 && age < 13) {
    console.log(`Kid!`);
}
else if (age >= 13 && age < 21) {
    console.log(`Adult!`);
}
else {
    console.log(`Elder!`);
}
29;
let fruits = ["mango", "banana", "grapes", "apple"];
if (fruits.includes("mango")) {
    console.log(`I like Mango!`);
}
else if (fruits.includes("grapes")) {
    console.log(`I like grapes!`);
}
else if (fruits.includes("orange")) {
    console.log(`I like Oranges as well!`);
}
else {
    console.log(` -- Demo Text --`);
}
// Question 31:
let age2 = 2;
let users = "No users!";
if (age2 == null && users == "No users!") {
    console.log(`We need to find some users!`);
}
else {
    if (age2 >= 0 && age2 < 3) {
        console.log(`Baby!`);
    }
    else if (age2 >= 3 && age2 < 7) {
        console.log(`Toddler!`);
    }
    else if (age2 >= 7 && age2 < 13) {
        console.log(`Kid!`);
    }
    else if (age2 >= 13 && age2 < 21) {
        console.log(`Adult!`);
    }
    else {
        console.log(`Elder!`);
    }
}
