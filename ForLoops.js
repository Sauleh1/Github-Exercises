"use strict";
// Question 30:
let workers = ["Sonia", "Wasay", "Sarah", "Admin", "Eric"];
for (let index = 0; index < workers.length; index++) {
    if (workers[index] === "Admin") {
        console.log(`Hi there admin, would you like to see a status report?`);
    }
    else {
        console.log(`Thank you ${workers[index]} for logging in again.`);
    }
}
// Question 32:
let currentusers = ["Harry", "Harvey", "Sonia", "Wasay", "Sarah"];
let newusers = ["Hamzah", "Hassan", "sonia", "SARAH", "eric"];
for (let index = 0; index <= 4; index++) {
    if (currentusers[index].includes(newusers[index]) || currentusers[index].includes(newusers[index].toLowerCase())) {
        console.log(`Not availaible.`);
    }
    else {
        console.log(`Availaible`);
    }
}
// Question 33:
let ordinal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let i = 0;
while (i <= 2) {
    if (i == 0) {
        console.log(ordinal[i] + "st.");
        i++;
    }
    if (i == 1) {
        console.log(ordinal[i] + "nd.");
        i++;
    }
    else {
        console.log(ordinal[i] + "rd.");
        i++;
    }
}
for (let i = 3; i < ordinal.length; i++) {
    console.log(ordinal + `th.`);
}
// Question 34:
let pizza = ["Fajita", "Cheesy", "Big Crust"];
for (var index in pizza) {
    console.log(`I love to eat ${pizza[index]} pizza so much!`);
}
console.log("I really love eating pizza. I fact, i would do pretty much anything viable to get some pizza!");
console.log("I love pizza!");
// Question 35:
let animals = [`Chicken`, `Cat`, `Parrot`];
for (var index in animals) {
    console.log(`${animals[index]}`);
}
console.log("These animals have nothing in common, except they make for really good pets!");
