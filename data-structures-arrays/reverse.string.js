// Create a function that reverses a string:
// 'Hi my name is Danny' should be:
// 'ynnaD si eman ym iH'

const string = 'Hi my name is Danny';

// Pseudocode:
// Check if the input is a string.
// Turn the string into an array using split().
// Use reverse() to reverse the array.
// Turn the array back into a string using join().

function reverse(string) {
  if (typeof string !== 'string' || !string) {
    return 'Input must be a string';
  }

  const newArray = string.split('');
  const reversedNewArray = newArray.reverse();
  const solution = reversedNewArray.join('');
  return solution;
}

reverse(string);

// Pseudocode:
// Check if the input is a string.
// Assign an empty array to a variable.
// Loop through the string backwards and push each item into the empty array.
// Turn the array into a string using join().


function reverse2(string) {
  if (typeof string !== 'string' || !string) {
    return 'Input must be a string';
  }

  const solutionArray = [];

  for (let i = string.length - 1; i >= 0; i--) {
    solutionArray.push(string[i]);
  }

  const solution = solutionArray.join('');
  return solution;
}

reverse2(string);

// Pseudocode:
// Check if the input is a string.
// Use the split() to turn the string into an array.
// Use the reverse() method to reverse the items in the array.
// Use the join() method to turn the reversed array back into a string.


function reverse3(string) {
  if (typeof string !== 'string' || !string) {
    return 'Input must be a string';
  }

  return string.split('').reverse().join('');
}

reverse3(string);

// Using arrow functions and the spread operator.

const reverse4 = string => [...string].reverse().join('');

reverse4(string);
