import { fibs, fibsRec } from './fibonacci';

describe('iterative fibonacci', () => {
  test('1st fibonnaci number is 0', () => {
    expect(fibs(1)).toEqual([0]);
  });

  test('First two fibonnaci numbers are [0, 1]', () => {
    expect(fibs(2)).toEqual([0, 1]);
  });

  test('First four fibonnaci numbers are [0, 1, 1, 2]', () => {
    expect(fibs(4)).toEqual([0, 1, 1, 2]);
  });

  test('First eight fibonnaci numbers are [0, 1, 1, 2, 3, 5, 8, 13]', () => {
    expect(fibs(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });

  test('First ten fibonnaci numbers are [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]', () => {
    expect(fibs(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });
});

describe('recursive fibonacci', () => {
  test('1st fibonnaci number is 0', () => {
    expect(fibsRec(1)).toEqual([0]);
  });

  test('First two fibonnaci numbers are [0, 1]', () => {
    expect(fibsRec(2)).toEqual([0, 1]);
  });

  test('First four fibonnaci numbers are [0, 1]', () => {
    expect(fibsRec(4)).toEqual([0, 1, 1, 2]);
  });

  test('First eight fibonnaci numbers are [0, 1, 1, 2, 3, 5, 8, 13]', () => {
    expect(fibsRec(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });

  test('First ten fibonnaci numbers are [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]', () => {
    expect(fibsRec(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });
});
