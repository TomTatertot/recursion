function mergeSort(array) {
  //base case
  if (array.length < 2) return array;

  const middleIndex = Math.floor(array.length / 2);
  const leftArray = array.slice(0, middleIndex);
  const rightArray = array.slice(middleIndex, array.length);

  //sort left.
  const newSort = [];
  const sortedLeft = mergeSort(leftArray);
  const sortedRight = mergeSort(rightArray);

  let i = 0;
  let j = 0;
  while (i < sortedLeft.length && j < sortedRight.length) {
    if (sortedLeft[i] < sortedRight[j]) {
      newSort.push(sortedLeft[i]);
      i++;
    } else {
      newSort.push(sortedRight[j]);
      j++;
    }
  }

  //any left over digits can be added to the end of the sorted array
  while (i < sortedLeft.length) {
    newSort.push(sortedLeft[i]);
    i++;
  }
  while (j < sortedRight.length) {
    newSort.push(sortedRight[j]);
    j++;
  }

  return newSort;
}

function mergeSort2(array) {
  //base case
  if (array.length < 2) {
    return array;
  }

  const middleIndex = Math.floor(array.length / 2);
  const leftArray = array.slice(0, middleIndex);
  const rightArray = array.slice(middleIndex, array.length);

  const newSort = [];
  const sortedLeft = mergeSort(leftArray);
  const sortedRight = mergeSort(rightArray);

  let i = 0;
  let j = 0;
  console.log(`sortedLeft: [${sortedLeft}]`);
  console.log(`sortedRight: [${sortedRight}]`);
  while (i < sortedLeft.length && j < sortedRight.length) {
    if (sortedLeft[i] < sortedRight[j]) {
      newSort.push(sortedLeft[i++]);
    } else {
      newSort.push(sortedRight[j++]);
    }
  }

  while (i < sortedLeft.length) {
    newSort.push(sortedLeft[i++]);
  }
  while (j < sortedRight.length) {
    newSort.push(sortedRight[j++]);
  }

  return newSort;
}

export { mergeSort, mergeSort2 };
