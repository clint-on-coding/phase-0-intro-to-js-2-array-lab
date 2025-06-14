// Write your solution here!
// index.js

// Initial array (will be reset before each test in indexTest.js)
const cats = ["Milo", "Otis", "Garfield"];

// 1. Appends a cat to the end of the array (destructive)
function destructivelyAppendCat(name) {
  cats.push(name);
}

// 2. Prepends a cat to the beginning of the array (destructive)
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// 3. Removes the last cat from the array (destructive)
function destructivelyRemoveLastCat() {
  cats.pop();
}

// 4. Removes the first cat from the array (destructive)
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// 5. Returns a new array with a cat appended (non-destructive)
function appendCat(name) {
  return [...cats, name];
}

// 6. Returns a new array with a cat prepended (non-destructive)
function prependCat(name) {
  return [name, ...cats];
}

// 7. Returns a new array with the last cat removed (non-destructive)
function removeLastCat() {
  return cats.slice(0, -1);
}

// 8. Returns a new array with the first cat removed (non-destructive)
function removeFirstCat() {
  return cats.slice(1);
}

