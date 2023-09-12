/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
function greet() {
  // Your code here
  let name = "tahani";
  console.log(`Hello ${name}`);
}
greet("tahani");

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
  // Your code here
  if (n % 2 == 0) {
    console.log(`false`);
  } else if (n % 2 != 0) {
    console.log(`true`);
  }
}

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(n) {
  // Your code here
  if (n % 2 == 1) {
    console.log((n - 1) / 2);
  } else if (n % 2 == 0) {
    console.log(n / 2);
  }
}
/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  // Your code here
  if (n % 2 != 0) {
    console.log(n * n);
  } else if (n % 2 == 0) {
    console.log(n * 2);
  } else return -1;
}

squareOrDouble(9);
oddsSmallerThan(12);
isOdd(7);
