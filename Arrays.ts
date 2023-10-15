// Question 11:
let arr1: string[] = [`Hamza`,`Hanzila`,`Hassan`]

console.log(arr1);

// Question 12:
let arr2: string[] = [`Hamza`,`Hanzila`,`Hassan`]

for (var index in arr2) {
    console.log("Hi there".concat(" " + arr2[index]) + "!");
}

// Question 13:
let ModesOTransportation = [`Bike`,`Bus`,`Car`,`Plane`]
console.log(`${ModesOTransportation[0]} Rides are SO FUN!`);
console.log(`${ModesOTransportation[1]} Rides are Fine, I guess.`);
console.log(`${ModesOTransportation[2]} Rides. The usual Ride.`);
console.log(`${ModesOTransportation[3]} Rides are scary.`);

// Question 14:
let PeopleToinvite = ["Sonia","Eric","Hira"];

for (var index in PeopleToinvite) {
    console.log(`Hi there ${PeopleToinvite[index]}! I am cordially inviting you to my dinner party. Your presence will make the happy occasion happier.`);
}

// Question 15:
// let PeopleToinvite = ["Sonia","Eric","Hira"];

// for (var index in PeopleToinvite) {
//     console.log(`Hi there ${PeopleToinvite[index]}! I am cordially inviting you to my dinner party. Your presence will make the happy occasion happier.`);
// }

console.log("Ok, so i found out that ".concat(`${PeopleToinvite[2]}`) + " Cant make it to the dinner, so im sending out a new set of invitations. I hope thats ok");

PeopleToinvite = ["Sonia","Eric","Hassan","Hanzila","Hamza", "Okasha"];

for (var index in PeopleToinvite) {
    console.log(`Hi there ${PeopleToinvite[index]}! I am cordially inviting you to my dinner party. Your presence will make the happy occasion happier.`);
}

// Question 16:
// let PeopleToinvite = ["Sonia","Eric","Hira"];

// for (var index in PeopleToinvite) {
//     console.log(`Hi there ${PeopleToinvite[index]}! I am cordially inviting you to my dinner party. Your prexence will make the happy occasion happier.`);
// }

// console.log("Ok, so i found out that ".concat(`${PeopleToinvite[2]}`) + " Cant make it to the dinner, so im sending out a new set of invitations. I hope thats ok");

// PeopleToinvite = ["Sonia","Eric","Hassan","Hanzila","Hamza", "Okasha"];

console.log("Ok, so i found a bigger dinner table, so im gonna invite three more people. I hope thats fine by you guys.");

PeopleToinvite.push("Hanzila");
PeopleToinvite.unshift("Sarah");
PeopleToinvite.splice(2, 0, "Wasay");

for (var index in PeopleToinvite) {
    console.log(`Hi there ${PeopleToinvite[index]}! I am cordially inviting you to my dinner party. Your presence will make the happy occasion happier.`);
}

// Question 17:
// let PeopleToinvite: Array<number | string> = ["Sonia","Eric","Hira"];

// for (var index in PeopleToinvite) {
//     console.log(`Hi there ${PeopleToinvite[index]}! I am cordially inviting you to my dinner party. Your presence will make the happy occasion happier.`);
// }

// console.log("Ok, so i found out that ".concat(`${PeopleToinvite[2]}`) + " Cant make it to the dinner, so im sending out a new set of invitations. I hope thats ok");

// PeopleToinvite = ["Sonia","Eric","Hassan"];

// console.log("Ok, so i found a bigger dinner table, so im gonna invite three more people. I hope thats fine by you guys.");

// PeopleToinvite.push("Hanzila");
// PeopleToinvite.unshift("Sarah");
// PeopleToinvite.splice(2, 0, "Wasay");

// for (var index in PeopleToinvite) {
//     console.log(`Hi there ${PeopleToinvite[index]}! I am cordially inviting you to my dinner party. Your presence will make the happy occasion happier.`);
// }

console.log("Im really sorry, but my new dinner table wont arrive in time for the dinner, and i only have space for 2 guests. Dont worry, those who are still invited will be told by me, and the ones who arent, maybe we could do another party at a later time.");

console.log(`Im really sorry ${PeopleToinvite.pop()}, but i cant invite you today. Maybe a later time we will meet. Thank You.`);
console.log(`Im really sorry ${PeopleToinvite.pop()}, but i cant invite you today. Maybe a later time we will meet. Thank You.`);
console.log(`Im really sorry ${PeopleToinvite.pop()}, but i cant invite you today. Maybe a later time we will meet. Thank You.`);
// console.log(`Im really sorry ${PeopleToinvite.pop()}, but i cant invite you today. Maybe a later time we will meet. Thank You.`);

for (var index in PeopleToinvite) {
    console.log(`Hi there ${PeopleToinvite[index]}, so dont be afraid, you are still invited. Please come to the dinner party.`);
}

console.log(PeopleToinvite);

// Question 18:
let seeTheWorld = ["Pakistan","Karachi","Germany","Switzerland"]

console.log(seeTheWorld);
console.log([...seeTheWorld].sort());
console.log(seeTheWorld);
console.log([...seeTheWorld].sort().reverse());
console.log(seeTheWorld);
console.log(seeTheWorld.reverse());
console.log(seeTheWorld.reverse());
console.log(seeTheWorld.sort());
console.log(seeTheWorld.reverse());

// Question 19:
console.log("I am inviting 2 people to my party!");

// Question 20:
let pokemon = ["Hunzah","Hariyama","Hitmontop"]
console.log(pokemon);