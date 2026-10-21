// I'm going to put all of my Javascript below instead of step by step

let animal = prompt("Enter any animal you can think of:");
let food = prompt("Enter any food you could dream of:");
let adjective = prompt("Enter any adjective to describe something:");
let place = prompt("Enter any place you could ever want to go:");
let name = prompt("Enter any name you could imagine:");
let object = prompt("Enter any object want:");
let numberOne = Number(prompt("Enter any number (NOT 67):"));
let numberTwo = Number(prompt("Enter any number (CANNOT BE ZER0, 0):"));

console.log("Animal type:", typeof animal);
console.log("Number type:", typeof numberOne);
animal = animal + " in a business suit"
let message = "Meet " + animal;
console.log(message);

let addition = numberOne + numberTwo;
let subtraction = numberOne - numberTwo;
let multiplication = numberOne * numberTwo;
let division = numberOne / numberTwo;
let exponentiation = numberOne ** numberTwo;
console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multplication:", multiplication);
console.log("Division:", division);
console.log("Remainder:", remainder);
console.log("Exponentiation:", exponentiation);












/* JAVASCRIPT MAD LIBS — FULL-BLOCK STARTER
   Write your OWN prompt questions and story. This file deliberately does not contain a completed answer.
   Keep your JavaScript here, not inside index.html.
*/

// PART 1 — INPUTS AND VARIABLES
// TODO: Ask for AT LEAST 6 words/text responses and 2 numbers with prompt().
// TODO: Save all responses in meaningfully named variables using let or const.
// Hint: let animal = prompt("Enter an animal:");
// Hint: let age = Number(prompt("Enter an age:"));

// PART 2 — DATA TYPES
// TODO: Declare a real Boolean: const isRidiculous = true; (true is NOT "true").
// TODO: Log typeof for a string, a number and a Boolean with labels.
// Hint: console.log("Animal type:", typeof animal);

// PART 3 — VARIABLE CHANGES AND CONCATENATION
// TODO: Reassign one let variable after its first value (use the updated value).
// TODO: Combine a quoted string and a variable with +; show the result.
// Hint: let message = "Meet " + animal;

// PART 4 — MATH OPERATORS
// TODO: Use ALL six operators with numeric values: +  -  *  /  %  **
// TODO: Store each result in a clearly named variable.
// TODO: Use at least TWO math results in your final story.
// NOTE: prompt() returns text; use Number(...) before doing math. Avoid division by zero.

// PART 5 — STORY (TEMPLATE LITERAL)
// TODO: Build one original story with BACKTICKS and ${variableName}.
// TODO: Include ALL eight prompt responses, plus at least two math results.
// Hint (not a whole story): let story = `Once, ${animal} arrived...`;

// PART 6 — DISPLAY ON THE WEBPAGE
// TODO: Uncomment and complete the line below once your story variable exists.
// document.getElementById("madlib-output").innerHTML = story;

// FINAL: Add at least three meaningful comments describing your code.
// TEST: Try TWO sets of answers and check the browser console for errors.
