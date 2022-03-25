// Given 2 arrays.
// Create a function that lets a user know whether these two arrays contain any common items.

// Example:
// ['a', 'b', 'c', 'x']
// ['z', 'y', 'i']
// false
// ----------
// ['a', 'b', 'c', 'x']
// ['z', 'y', 'x']
// true

// Pseudocode
// (1)
// For Loop through the first array.
// For each element in the first array, loop through the second array.
// If the element in the first array matches an element in the second array, return true.
// If not, return false
// Time complexity O(a * b)
// ----------
// (2)
// Assign a variable an empty object.
// For loop through the first array.
// If the element does not exist in the object, add each element once into the object as a key with the value of 1.
// If the element does exist, do nothing.
// For loop through the second array.
// If the element does not exist in the object, add each element once into the object as a key with the value of 1.
// If the element does exist, add 1 to the value.
// For in loop the object
// If a key has a value of 2 or greater, return true.
// If the loop completes without returning true, return false/
// Time complexity O(a + b)?

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['a', 'g', 'r'];

function containsCommonItem1(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

containsCommonItem1(array1, array2);
// Quadratic O(a * b) - Time Complexity
// O(1) - Space Complexity

function containsCommonItem2(arr1, arr2) {
  if (!arr1 || !arr2 || !Array.isArray(arr1) || !Array.isArray(arr2)) {
    return 'Invalid arguments';
  }

  const map = {};

  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (map[arr2[i]]) {
      return true;
    }
  }
  return false;
}

containsCommonItem2(array1, array2);
// Linear O(a + b) - Time Complexity
// O(a) - Space Complexity

function containsCommonItem3(arr1, arr2) {
  return arr1.some(item => arr2.includes(item));
}

containsCommonItem3(array1, array2);
// Readable O(a * b) Time Complexity
