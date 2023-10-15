"use strict";
// Question 2:
const PersonName = "Eric";
console.log("Hi there".concat(" " + PersonName) + "! Would you like to learn some Python Today?");
// Question 4:
let FamousQuote = "The elevator to sucess is out of order. You will have to take the stairs one step at a time";
console.log("RandomPerson101 once said,".concat(" " + `"` + FamousQuote + `"`) + ".");
// Question 5:
let FamousQuote2 = "The elevator to sucess is out of order. You will have to take the stairs one step at a time";
let FamousPerson2 = "Albert Einstien";
console.log(`${FamousPerson2} once said,`.concat(" " + `"` + FamousQuote2 + `"`) + ".");
// Question 6:
console.log("\n\n\tSaba");
console.log("\t\t\nQamar");
console.log("\t\t\n   Hi");
// Question 7:
console.log("\n\n\tSaba");
console.log("\t\t\nQamar");
console.log("\t\t\n   Hi");
// Question 7:
let Addition = 4 + 4;
console.log(Addition);
let Subtration = 100 - 92;
console.log(Subtration);
let Multiplication = 2 * 4;
console.log(Multiplication);
let Division = 40 / 5;
console.log(Division);
// Question 8:
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
// Question 9:
let FavNumber = 7;
console.log("My favourite number is...".concat(" " + FavNumber + "!"));
// Question 10:
// Why is Titlecase, something so hard, so early in the Questions?!!?
// This program prints a string in Uppercase, Lowercase, and TitleCase
// Also Question 3:
let Sentence = "Hi there user!";
let Upper = Sentence.toUpperCase();
console.log(Upper);
let Lower = Sentence.toLowerCase();
console.log(Lower);
function ToTitleCase(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}
ToTitleCase(Sentence);
// Why is this an assignment?
// Installed VS Code, Node JS And Typescript
