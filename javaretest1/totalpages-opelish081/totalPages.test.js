const testFn = require('./totalPages')

test('output#1', () => {
  expect(
    testFn(
      [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35
      ],
      15
    )
  ).toBe(3)
})

test('output#2', () => {
  expect(testFn([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 20)).toBe(1)
})

test('output#3', () => {
  expect(
    testFn(
      [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
        39, 40
      ],
      10
    )
  ).toBe(4)
})

test('output#4', () => {
  expect(
    testFn(
      [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35
      ],
      0
    )
  ).toBe(1)
})

test('output#5', () => {
  expect(
    testFn(
      [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35
      ],
      null
    )
  ).toBe(1)
})
test('output#6', () => {
  expect(
    testFn(
      [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35
      ],
      undefined
    )
  ).toBe(1)
})

test('output#7', () => {
  expect(testFn(null, 20)).toStrictEqual(undefined)
})

test('output#8', () => {
  expect(testFn(undefined, 20)).toStrictEqual(undefined)
})
