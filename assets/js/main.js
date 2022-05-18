// LvL1_1_1
let address = ["Auf der langen Strecke", "01100", "Gehtmalgarnicht", "Bayan"];
console.log(address);

let besteFreunde = ["Spitzentyp", "Geilertyp", "Supertyp"];
console.log(besteFreunde);

let person = [
  "Kalle",
  "Pohl",
  "Karl-Heinz",
  69,
  "Angeln & Gitarra spielen",
  "Moers",
  "Fullstack Bootcamp bei Supercode",
];
console.log(person);

person.push(address, besteFreunde);
console.log(person);
console.log(person[person.length - 2]);
console.log(person[person.length - 1]);

// LvL1_1_2
console.log(address.length);
console.log(besteFreunde.length);
console.log(person.length);

// LvL1_2
let meineTrainer1 = ["Eric", "Steffen", "Simon", "Ahmed"];
console.log(meineTrainer1);
let meineTrainer2 = new Array("Max", "Steffen", "Simon", "Ahmed");
console.log(meineTrainer2);
let meineTrainer3 = new Array();
meineTrainer3[0] = "Eric";
meineTrainer3[1] = "Steffen";
meineTrainer3[2] = "Simon";
meineTrainer3[3] = "Ahmed";
console.log(meineTrainer3);

// LvL1_3
let numberArray = [5, 6, 7, 8, 9, 10];
console.log(numberArray);
console.log(numberArray[4]);
console.log(numberArray[0]);
console.log(numberArray[5]);

// LvL1_4
let meinText1 = "Hallo Welt. Ich wünsche euch allen einen guten Arbeitstag.";
let meinText2 = "Wie geht es dir heute?";
let meinText3 = "Heute ist ein großer Tag für uns.";
let split1 = meinText1.split();
let split2 = meinText1.split("");
let split3 = meinText1.split(" ");
let split4 = meinText2.split();
let split5 = meinText2.split("");
let split6 = meinText3.split(" ");

console.log(split1);
console.log(split2);
console.log(split3);
console.log(split4);
console.log(split5);
console.log(split6);

// LvL1_5_1
let songs = ["Bohemian Rhapsody", "Stairway to Heaven", "Hotel California"];
let totalsongs = songs.push(
  "Sweet Child O'Mine",
  "Blau blueht der",
  "Benjamin Bluemchen"
);
console.log(songs);
console.log(totalsongs);

let besteFussballerAllerZeiten = [
  "Gerd Mueller",
  "Diego Maradona",
  "Ronaldo",
  "Thomas Mueller",
  "Juergen Klinsmann",
];
besteFussballerAllerZeiten.push("Bodo Ilgner", "Andreas Koepke", "Oliver Kahn");
console.log(besteFussballerAllerZeiten);

const artists = ["michael", "elvis"];
artists.push("justin", "charlie");
console.log(artists);

// LvL1_5_2
let heroUndEnemy = [
  ["Batman", "The Joker"],
  ["Professor X", "Magneto"],
  ["Thor", "Loki"],
];
heroUndEnemy.push(
  ["Superman", "Lex Luthor"],
  ["Wolverine", "Sabretooth"],
  ["Ghost Rider", "Mephisto"]
);
console.log(heroUndEnemy);

// LvL1_6
let entfernterSong = songs.pop();
console.log(songs);
console.log(entfernterSong);

let entfernterFussballer = besteFussballerAllerZeiten.pop();
console.log(besteFussballerAllerZeiten);
console.log(entfernterFussballer);
besteFussballerAllerZeiten.pop();
besteFussballerAllerZeiten.pop();
besteFussballerAllerZeiten.pop();
console.log(besteFussballerAllerZeiten);

// LvL1_7
let deutscheGerichte = [
  "Speckkuchen",
  "Thüringer Rostbratwurst",
  "Quarkkeulchen",
  "Sauerbraten",
];

deutscheGerichte.unshift(
  "Frikko",
  "Kartoffeln",
  "Heringsfilet",
  "Kabeljau",
  "Gulasch"
);
console.log(deutscheGerichte);

// LvL1_8
let nichtgut = [
  deutscheGerichte.shift(),
  deutscheGerichte.shift(),
  deutscheGerichte.shift(),
];

console.log(nichtgut);

// LvL1_9
let Arr1 = [23, 54, 75];
Arr1.push(27, 42, 99, 30, 8);
Arr1.unshift(22, 33, 44, 55, 66);
Arr1.pop();
Arr1.pop();
Arr1.shift();
Arr1.shift();
console.log(Arr1);

// LvL1_12
let array = [
  "imageTeilnehmer000supercode.jpg",
  "imageTeilnehmer001supercode.jpg",
  "imageTeilnehmer002supercode.jpg",
  "imageTeilnehmer003supercode.jpg",
  "imageTeilnehmer004supercode.jpg",
  "imageTeilnehmer005supercode.jpg",
  "imageTeilnehmer006supercode.jpg",
  "imageTeilnehmer007supercode.jpg",
  "imageTeilnehmer008supercode.jpg",
  "imageTeilnehmer009supercode.jpg",
  "imageTeilnehmer010supercode.jpg",
  "imageTeilnehmer011supercode.jpg",
  "imageTeilnehmer012supercode.jpg",
  "imageTeilnehmer013supercode.jpg",
  "imageTeilnehmer014supercode.jpg",
  "imageTeilnehmer015supercode.jpg",
  "imageTeilnehmer016supercode.jpg",
  "imageTeilnehmer017supercode.jpg",
  "imageTeilnehmer018supercode.jpg",
  "imageTeilnehmer019supercode.jpg",
];

let copyImg1 = array.slice(6, 15);
console.log(copyImg1, array);
let copyImg2 = array.slice(6, 12);
console.log(copyImg2);
