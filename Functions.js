"use strict";
36.;
function maake_shirt(size) {
    console.log(`You have ordered a shirt of size ${size}!`);
}
maake_shirt(14.5);
37.;
function make_shirt(size = "Large", message = "I love Typescript!") {
    console.log(`You have ordered a shirt of size ${size}!`);
    console.log(message);
}
make_shirt("Large");
make_shirt("Medium");
make_shirt("XLarge", "This is my shirt!");
38.;
function describe_city(city, country = "America") {
    console.log(`${city} is in ${country}`);
}
describe_city("Karachi", "Pakistan");
describe_city("Paris", "Europe");
describe_city("Egypt", "Africa");
39.;
function city_country(city, country) {
    console.log(`"${city}, ${country}"`);
}
city_country("Karachi", "Pakistan");
city_country("Paris", "Europe");
city_country("Egypt", "Africa");
40.;
function make_album(artist_name, artist_song_title, tracks) {
    if (tracks) {
        let music_Album1 = {
            artist_name: artist_name,
            artist_song_title: artist_song_title,
            song_tracks: tracks
        };
        console.log(music_Album1);
    }
    else {
        let music_Album1 = {
            artist_name: artist_name,
            artist_song_title: artist_song_title
        };
        console.log(music_Album1);
    }
}
make_album("Kaile jenner", "I love Banana!", 5);
make_album("BTS", "Butter!", 11);
make_album("Sonia Yousuf", "Gardening is fun!");
41.;
function Magicians() {
    let Magicians = [`David copperfield`, `Criss Angel`, `David Blaine`];
    let i = 0;
    while (i < Magicians.length) {
        console.log(Magicians[i]);
        i++;
    }
}
Magicians();
42.;
let Maagicians = [`David copperfield`, `Criss Angel`, `David Blaine`];
function Magic() {
    let i = 0;
    while (i < Maagicians.length) {
        console.log(Maagicians[i]);
        i++;
    }
}
Magic();
let ms = [`David copperfield`, `Criss Angel`, `David Blaine`];
function Make_great() {
    for (let i = 0; i < ms.length; i++) {
        console.log(`${ms[i]} the great!`);
    }
}
Make_great();
43.;
let MAagicians = [`David copperfield`, `Criss Angel`, `David Blaine`];
function Magicians3() {
    let i = 0;
    while (i < MAagicians.length) {
        console.log(MAagicians[i]);
        i++;
    }
}
Magicians3();
function Make_great2() {
    for (let i = 0; i < ms.length; i++) {
        console.log(`${ms[i]} the great!`);
    }
}
Make_great2();
function Show_Magicians(fn, fn2) {
    fn();
    fn2();
}
Show_Magicians(Magicians, Make_great2);
44.;
function Make_Sandwich(ingredients, extras) {
    extras.join(" and ");
    ingredients.join(" and ");
    console.log(`You are ordering a sandwich with ${ingredients} along with ${extras}.`);
}
Make_Sandwich(["Chicken", "Bread", "Tomatos"], ["Fries"]);
Make_Sandwich(["Chicken", "White bread", "Tomatos"], ["Mustard"]);
Make_Sandwich(["Beef", "Cucumber", "Lettuce"], ["Ketchup"]);
45.;
function Car(model, manu, color, alloywheels) {
    let Make_Car = {
        model: model,
        manufacturur: manu,
        arbitrary_nums: {
            color: color,
            alloywheels: alloywheels
        }
    };
    console.log(Make_Car);
}
Car("32-BH", "Nissan", "White", true);
