const avengers = [ 
  { 
     "name": "Iron Man", 
     "alter_ego": "Tony Stark", 
     "primary_power": 
     "Powered Armor", "universe": 
     "Marvel Cinematic Universe", "age": 48 
  },
  {
      "name": "Captain America", 
      "alter_ego": "Steve Rogers", 
      "primary_power": "Super Soldier Serum", 
      "universe": "Marvel Cinematic Universe", "age": 105 
  }, 
  { 
      "name": "Thor", 
      "alter_ego": "Thor Odinson",
      "primary_power": "Super Strength", 
      "universe": "Marvel Cinematic Universe", 
      "age": 1500 
  },
  {
      "name": "The Hulk", 
      "alter_ego": "Bruce Banner",
      "primary_power": "Super Strength",
      "universe": "Marvel Cinematic Universe",
      "age": 49 
  },
  { 
      "name": "Black Widow",
       "alter_ego": "Natasha Romanoff",
      "primary_power": "Expert Spy and Assassin",
      "universe": "Marvel Cinematic Universe",
      "age": 37
  },
  {
      "name": "Hawkeye", 
      "alter_ego": "Clint Barton",
      "primary_power": "Expert Marksman",
      "universe": "Marvel Cinematic Universe",
      "age": 51
   }
];

// Displays all of the names to the console
let allHeros = [];
for (let i = 0; i < avengers.length; i++) {
  allHeros.push(avengers[i].name);
}

console.log("This is a list of all the Avengers in the array!: " + allHeros.join(', '));


// Displays all the heros that equid Super Strength
let strengthHero = [];
for (let i = 0; i < avengers.length; i ++) {
  if (avengers[i].primary_power === "Super Strength") {
    strengthHero.push(avengers[i].name);
  }
}

console.log("All of these heros have Super Strength abilities!: " + strengthHero.join(', '));

// Displays all heros that are 50 or older 
let oldHeros = [];
for (let i = 0; i < avengers.length; i++) {
  if (avengers[i].age >= "50") {
    oldHeros.push(avengers[i].name);
  }
}

console.log("These Avengers are all 50 years old, or OLDER!!: " + oldHeros.join(', '));
