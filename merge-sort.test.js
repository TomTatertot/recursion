import { mergeSort, mergeSort2 } from './merge-sort';

describe('merge sort', () => {
  test('Empty array returns an empty array', () => {
    expect(mergeSort([])).toEqual([]);
  });

  test('Array with one digit returns the same array', () => {
    expect(mergeSort([73])).toEqual([73]);
  });

  test('Sorts an unsorted array with 4 digits', () => {
    expect(mergeSort([5, 2, 1, 3, 6, 4])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('Sorted array returns the same array', () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('Sorts an unsorted array with 8 digits', () => {
    expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([
      0, 1, 1, 2, 3, 5, 8, 13,
    ]);
  });

  test('Sorts an unsorted array with 4 digits', () => {
    expect(mergeSort([105, 79, 100, 110])).toEqual([79, 100, 105, 110]);
  });
});

describe('merge sort refactored', () => {
  test('Empty array returns an empty array', () => {
    expect(mergeSort2([])).toEqual([]);
  });

  test('Array with one digit returns the same array', () => {
    expect(mergeSort2([73])).toEqual([73]);
  });

  test('Sorts an unsorted array with 4 digits', () => {
    expect(mergeSort2([5, 2, 1, 3, 6, 4])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('Sorted array returns the same array', () => {
    expect(mergeSort2([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('Sorts an unsorted array with 8 digits', () => {
    expect(mergeSort2([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([
      0, 1, 1, 2, 3, 5, 8, 13,
    ]);
  });

  test('Sorts an unsorted array with 4 digits', () => {
    expect(mergeSort2([105, 79, 100, 110])).toEqual([79, 100, 105, 110]);
  });
});
