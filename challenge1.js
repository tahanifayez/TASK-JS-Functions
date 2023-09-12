/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 
 */
function printName() {
  let name = "tahani";
  console.log(`my name is ${name}`);
}
printName();
/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */

function printAge(year) {
  let curyear = 2023;
  age = curyear - year;
  console.log(`my age is ${age}`);

  return age;
}

printAge(1930);

/**
 
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */

function printHello(name, lang) {
  if (lang == "eng") console.log(`hello ${name}`);
  else if (lang == "esp") console.log(`hola ${name}`);
  else if (lang == "fra") console.log(`bonjour ${name}`);
  else if (lang == "tr") console.log(`merhaba ${name}`);
  else console.log(`try again :)`);
}

printHello("tahani", "esp");

/**

 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */
function printMax(num1, num2) {
  if (num1 > num2) console.log(`${num1} is bigger`);
  else if (num2 > num1) console.log(`${num2} is bigger`);
  else console.log(`error`);
}

printMax(18, 9);
