// Problem:
// • Given an array of integers and an integer sum
// • Return true if there are two numbers in the array that add up to the sum
// • Return false if no two numbers add up to the sum

// Pseudocode:
// Loop through the array.
// For each item, loop through the same array starting at the next item
// If the item at the index of the first array and the item at the index of the second array add up to the sum, return true
// If the loop completes, then no two numbers add up to the sum, return false
// Time Complexity - Quadratic O(n^2) - Nested Loops

const array1 = [1, 2, 5, 8, 3];
const sum = 10;

function hasPairThatEqualsSum1(array, sum) {
  if (!Array.isArray(array) || typeof sum !== 'number') {
    return 'The first argument must be an array, the second argument must be a number';
  }

  {for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === sum) {
        return true;
      }
    }
  }}
  return false;
}

hasPairThatEqualsSum1(array1, sum);

// Pseudocode:
// Assign an empty object literal to a variable
// Loop through the array and for each number, check if the difference of the sum and the current number is in the object
// If it exists, return true
// If it is not, store the difference of the sum and the current number as a key in the object.
// Time Complexity - Linear O(n) - One Loop

// const array1 = [1, 2, 5, 8, 3];
// const sum = 10;

function hasPairThatEqualsSum2(array, sum) {
  if (!Array.isArray(array) || typeof sum !== 'number') {
    return 'The first argument must be an array, the second argument must be a number';
  }

  const map = {};

  for (let i = 0; i < array.length; i++) {
    if (map[sum - array[i]]) {
      return true;
    } else {
      map[array[i]] = true;
    }
  }
  return false;
}

hasPairThatEqualsSum2(array1, sum);
