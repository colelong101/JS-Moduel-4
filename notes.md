/*let isUserReady = confirm("Are you ready");
console.log(isUserReady);
if (isUserReady) {
  alert("Aye Aye Captain");
}*/


/*let userAge = 23;
let isFemale = false;
let points = 703;
let cartValue = 299;
let shippingCost = 9.99;

if (userAge > 21) {
  if (cartValue >=300 || points >= 500) {
    shippingCost = 0;
  }
}

console.log("You're total shipping cost is $", shippingCost);*/

// or this does the same thing but more concise and readable

/*if (userAge > 21 && (cartValue >= 300 || points >= 500)) {
  shippingCost = 0;
}

console.log("You're total shipping cost is $", shippingCost);*/


/*let isUserReady = confirm("Are you ready");

if(isUserReady) {
  console.log("User is ready");
} else {
  console.log("User not ready");
}*/


// Nesting if else statements:

/*let number = prompt("Enter a number", 0);

if (number < 10){
  alert("<10");
} else if (number < 30) {
  alert("<30");
} else if (number < 60) {
  alert("<60");
} else if (number < 90) {
  alert("<90");
} else if (number < 100) {
  alert("<100");
} else if (number == 100) {
  alert("100")
} else {
  alert(">100")
}*/


/*The same code rewritten using the conditional operator looks a bit easier. As a reminder: the first operand (before the question mark) is the condition to verify, the second operand (between the question mark and the colon) will be returned if the condition is true, and the third operand (after the colon) if the condition is false.

let price = 100;
let shippingCost = price > 50 ? 0 : 5;

console.log(`price = ${price}, shipping = ${shippingCost}`); // -> price = 100, shipping = 0

The conditional operator returns the values of the second or third operand, but if they are complex expressions, it will calculate them first. You can use this fact to place the commands to be executed conditionally as these operands.

let start = confirm("Start?");
start ? alert("Here we go!") : console.log("Aborted");

However, it would make more sense to save the same piece of code in the following form:

let start = confirm("Start?");
let message = start ? "Here we go!" "Aborted";
alert(message);

It’s possible to have longer code as operands, but it’s better to use if statements, as it is much clearer what intention the developer had when writing the code.*/

/*let gate = prompt("Choose gate a, b, or c");
let win = false;

switch (gate) {
  case "a":
    alert("Gate A: Empty:(");
    break;
  case "b":
    alert("Gate B: YOU WON!!!");
    win = true;
    break;
  case "c":
    alert("Gate C: Empty:(");
    break;
  default:
    alert:("No gate " + String(gate));
}

if (win) {
  alert("Congrats! You won the game!!!!!!!")
} else {
  alert("You Lose the game!Aaa");
}*/

//Exercise 1 and 2:

/*let number = prompt("Please input any number!");

if (number > 90 && number < 110) {
  alert("Bingo!!!")
} else {
  alert("You missed!!!")
}*/
//ternary operator version

/*let number = prompt("Enter a number!");
let message = (number > 90 && number < 110) ? "Bingo!!!" : "Miss!!!";
alert(message);*/


Practicing Loops

While Loop

let message = prompt("Do you want to see a loop of numbers");
let n = 0;

if (message = true) {
  alert("Check the console!!!!")
  while(n < 91) {
    console.log(n);
    n += 10;
  }
}

This time, the decision whether the loop is to end will be made by the user answering the question asked during each iteration of the loop (we will use the confirm dialog we recently introduced).


let isOver = false;
let counter = 1;

while (isOver != true) {
  let continueLoop = confirm(`[${counter}] Do you want to continue the loop`);
  isOver = continueLoop === true ? false : true;
  counter = counter + 1;
}

OR

let isOver = false;
let counter = 0;

while (!isOver) {
  isOver = !confirm(`[${counter++}] Do you want to continue the loop?`)
}

DO WHILE LOOP

let isOver;
let counter = 1;

do {
  isOver = isOver = !confirm('[${counter++}] Continue the loop?');
} while (!isOver);

the FOR Loop!!

for (let i = 0; i < 10; i++) {
  console.log(i);
}

AND

let values = [10, 30, 50, 100];
let sum = 0;

for (let i = 0; i < 4; i++) {
  sum += values[i];
}

console.log(sum);

Loops and Arrays

let names = [];
let isOver = false;

while (!isOver) {
  let name = prompt("Enter another name or press cancel");
  if (name !=null) {
    names.push(name);
  } else {
    isOver = true;
  }
}

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

This code creates an empty array called names. It then enters a while loop which continues to prompt the user to enter names using prompt(). If the user enters a name, the name is added to the names array using the push() method. If the user clicks "cancel" or leaves the input field blank, the isOver variable is set to true and the while loop is exited.

After the while loop ends, a for loop is used to iterate through the names array and log each name to the console using console.log(). The loop condition i < names.length ensures that the loop runs for as many names as have been added to the array.


For Of

This code: 

let values = [10, 30, 50, 100];
let sum = 0;

for (let i = 0; i < values.length; i++) {
  sum += values[i];
}

console.log(sum);

written with a For Of loop: 

let values = [10, 30, 50, 100];
let sum = 0;

for (let number of values) {
  sum+=number;
}

console.log(sum);

Let's look at one more example. This time, we declare a cities array, which contains objects describing some of the biggest cities in the world. Each object contains name and population fields. Using the for ... of loop, we go through this array and display information about all cities that have more than 20 million inhabitants.

let cities = [
  { name: "New York", population: 18.65e6},
  { name: "Cairo", population: 18.82e6 },
  { name: "Mumbai", population: 19.32e6 },
  { name: "São Paulo", population: 20.88e6 },
  { name: "Mexico City", population: 21.34e6 },
  { name: "Shanghai", population: 23.48e6 },
  { name: "Delhi", population: 25.87e6 },
  { name: "Tokyo", population: 37.26e6 }
];

for (let city of cities) {
  if (city.population > 20e6) {
    console.log(`${city.name} (${city.population})`);
  }
}

for in loops!

There is also a version of the for loop that enables us to walk through object fields. This is a for ... in construction. It iterates through all fields of the indicated object, placing the names of these fields (or keys) in the variable. In the example, we use an object containing data about a user:

let user = {
  name: "Calvin",
  surname: "Hart",
  age: 66,
  email: "CalvinMHart@teleworm.us"
};

for (let key in user) {
  console.log(key);
}

In each loop iteration, the names of successive fields of the user object are assigned to the key variable, i.e.: name, surname, age, email. Then we write them on the console. But what if we want to retrieve the values stored in the fields with these names? In order to get access to the specified field, we use dot notation (the part of the course dedicated to data types) that is, after the name of the object, we write a dot and the field name (key). The key given in this notation is always treated as a literal. In the for ... in loop, this approach will not work, because the field name (key) is placed in a variable. Fortunately, we have an alternative solution, bracket notation. It allows you to refer to the selected object field using brackets (like in arrays). In the square bracket behind the object name, we place the field name, which can be either a literal or a variable containing that name:

Break and Continue

The break statement is used to terminate the execution of a loop or a switch statement. In each of these contexts, whenever the JavaScript engine encounters a break statement, it exits the whole loop or switch statement, and jumps to the first statement after that loop or switch.

In the example, we can see an infinite while loop that will be exited using break after the variable i becomes greater than or equal to 5. Such a use of break is only of illustrative importance, because it would make more sense to include this condition directly in the while construction.

let i = 0;
// An infinite loop
while (true) {
  console.log(i);
  i++;
  if (i>=5) {
    break;
  }
}

alert('Exited the loop with a break (${i}).')


Just like break, continue can be used in loops (but not in the switch statement). When used, it applies to the closest surrounding loop. The continue statement, in contrast to break, does not end the whole loop, but rather starts the next iteration of this loop. We can think of it as jumping right to the end of the current iteration.

for (let i = 0; i < 10; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}














