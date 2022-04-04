// Merge two sorted arrays into one sorted array.
// Array1 = [0, 3, 4, 31]
// Array2 = [4, 6, 30]
// Solution = [0, 3, 4, 4, 6, 30, 31]

// Will the input array always be sorted? - Yes
// Will the two inputs always be arrays? - Yes

const array1 = [0, 3, 4, 31];
const array2 = [4, 6, 30];

// Pseudocode:
// Check that each inputs are arrays.
// Concatenate the two arrays with concat().
// Use sort() sort all the items in order.

function mergeTwoSortedArrays(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return 'Both inputs must be arrays';
  } else if (array1.length === 0) {
    return array2;
  } else if (array2.length === 0) {
    return array1;
  }

  return array1.concat(array2).sort((a, b) => a - b);
}

mergeTwoSortedArrays(array1, array2);

// Pseudocode:
// Check that each inputs are arrays.
// Assign an empty array to a variable to be the solution.
// Assign the first item of array1 to a variable.
// Assign the first item of array2 to a variable.
// Assign 1 to a variable to be array1's index.
// Assign 1 to a variable to be array2's index.
// Loop while array1 or array2 is true.
// If array1's item is less than array2's item or array2's item is undefined, push array1's item into the mergedArray and increment array1's index.
//  Else, push array2's item into the mergedArray and increment array2's index.


function mergeTwoSortedArrays2(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return 'Both inputs must be arrays';
  } else if (array1.length === 0) {
    return array2;
  } else if (array2.length === 0) {
    return array1;
  }

  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let array1Index = 1;
  let array2Index = 1;

  while (array1Item || array2Item) {
    if (array1Item < array2Item || !array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[array1Index];
      array1Index++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[array2Index];
      array2Index++;
    }
  }

  return mergedArray;
}

mergeTwoSortedArrays2(array1, array2);
