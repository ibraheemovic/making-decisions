/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/

let jonsnowAttack = 25;
let jaimeLannisterAttack = 35;

if (jonsnowAttack > jaimeLannisterAttack) {
  console.log("jon snow is more beefy");
} else if (jaimeLannisterAttack === jonsnowAttack) {
  console.log("equally strong");
} else {
  console.log("jaime is the og!");
}
let jonsnowhealth = 100;
let jonsnowdefense = 0;

if (jonsnowhealth <= jaimeLannisterAttack) {
  console.log("jon snow has been slayed");
} else {
  jonsnowhealth -= jaimeLannisterAttack;
  console.log("jons health is down to" + jonsnowhealth);
}

jonsnowdefense += 25;

if (jonsnowhealth <= jaimeLannisterAttack) {
  console.log("jon has been slain");
} else {
  jonsnowhealth -= jaimeLannisterAttack - jonsnowdefense;
  console.log("jons health is down to " + jonsnowhealth);
}

if (jonsnowhealth + 50 >= 100) {
  jonsnowhealth = 100;
} else {
  jonsnowhealth += 50;
}
console.log(jonsnowhealth);

let coinlandshead = false;

if (coinlandshead !== false) {
  console.log("The fight continues!");
} else {
  console.log("Jon is allowed to run away");
}
// if (coinlandsheads === false) {
//   console.log("The fight continues!");
// } else {
//   console.log("Jon is allowed to run away.");
// }

for (let i = 0; i < 5; i++) {
  if (jonsnowhealth <= 0) {
    console.log("Jon has been slain");
  } else {
    jonsnowhealth -= jaimeLannisterAttack - jonsnowdefense;
    console.log("Jons health is now ${jonsnowhealth}");
  }
}

while (jonsnowhealth > 0) {
  jonsnowhealth -= jaimeLannisterAttack - jonsnowdefense;
  if (jonsnowhealth <= 0) {
    console.log("Jon snow is finally dead");
  } else {
    console.log("Jons health is now $ {jonSnowHealth}");
  }

  if (jonsnowAttack > 25 && jonsnowAttack < 75) {
    console.log("Jon is mid level beast");
  }

  if (jaimeLannisterAttack < 25 || jaimeLannisterAttack > 75) {
    console.log("jaime is strong if he ate his wheaties");
  } else {
    console.log("jaime is mid level beast");
  }
}
