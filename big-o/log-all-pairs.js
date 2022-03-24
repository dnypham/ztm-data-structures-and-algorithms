// Log all pairs of array

const arr = [1, 2, 3, 4, 5];

function logAllPairsOfArray(array) {
  array.forEach(item1 => {
    array.forEach(item2 => {
      console.log(item1, item2);
    });
  });
}



logAllPairsOfArray(arr); // O(n^2)
