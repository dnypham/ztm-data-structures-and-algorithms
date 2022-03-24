// The runtime: How long does it take to run a certain problem through a function or a task.
// How do we measure the Big O or the efficiency of this code?

const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(100000).fill('nemo');

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
      break;
    }
  }
}

findNemo(large); // O(n) --> Linear Time
