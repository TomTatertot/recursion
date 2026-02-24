//takes number and returns array containing that many numbers from the Fibonacci sequence
//an input of 8 should return the array [0, 1, 1, 2, 3, 5, 8, 13].
function fibs(n) {
  //must start with first 2 digits to continue
  if (n === 1) return [0];

  const fibArray = [0, 1];
  for (let i = 2; i < n; i++) {
    fibArray[i] = fibArray[i - 2] + fibArray[i - 1];
  }

  return fibArray;
}

//same as fibs but solved recursively
function fibsRec(n, fibArray = [0, 1]) {

  if (n === 1) {
    return [0];
  }

  if (fibArray.length >= n) 
    return fibArray;

  let index = fibArray.length;
  fibArray[index] = fibArray[index - 2] + fibArray[index - 1];
  fibsRec(n, fibArray);

  return fibArray;
}

const result = fibsRec(2);
console.log(result);

export {fibs, fibsRec}