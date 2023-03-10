const testFn = require('./getItemsOfCurrentPage')

test('output#1', () => {
  expect(
    testFn(
      [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32
      ],
      3,
      15
    )
  ).toStrictEqual([31, 32])
})

test('output#2', () => {
  expect(
    testFn([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 1, 20)
  ).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
})

test('output#3', () => {
  expect(
    testFn(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      2,
      5
    )
  ).toStrictEqual([6, 7, 8, 9, 10])
})

test('output#4', () => {
  expect(testFn([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 30)).toStrictEqual([])
})

test('output#5', () => {
  expect(testFn([], 2, 5)).toStrictEqual([])
})
test('output#6', () => {
  expect(testFn(null, 2, 5)).toStrictEqual(undefined)
})

test('output#7', () => {
  expect(testFn(undefined, 3, 10)).toStrictEqual(undefined)
})

test('output#8', () => {
  expect(
    testFn(
      [
        1,
        2,
        3,
        4,
        5,
        'j',
        'k',
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        'n',
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        'o',
        'p',
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        'q',
        'r',
        35,
        36,
        37,
        false,
        'Hello',
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        'h',
        'i',
        'l',
        'm',
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        'z',
        true,
        'good bye',
        59,
        60,
        61,
        62,
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        63,
        64,
        65,
        66,
        67,
        68,
        69,
        70,
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y'
      ],
      5,
      10
    )
  ).toStrictEqual(['r', 35, 36, 37, false, 'Hello', 38, 39, 40, 41])
})

test('output#9', () => {
  expect(
    testFn(
      [
        1,
        2,
        3,
        4,
        5,
        'j',
        'k',
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        'n',
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        'o',
        'p',
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        'q',
        'r',
        35,
        36,
        37,
        false,
        'Hello',
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        'h',
        'i',
        'l',
        'm',
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        'z',
        true,
        'good bye',
        59,
        60,
        61,
        62,
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        63,
        64,
        65,
        66,
        67,
        68,
        69,
        70,
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y'
      ],
      5,
      20
    )
  ).toStrictEqual([
    'c',
    'd',
    'e',
    'f',
    'g',
    63,
    64,
    65,
    66,
    67,
    68,
    69,
    70,
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y'
  ])
})

test('output#10', () => {
  expect(
    testFn(
      [
        1,
        2,
        3,
        4,
        5,
        'j',
        'k',
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        'n',
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        'o',
        'p',
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        'q',
        'r',
        35,
        36,
        37,
        false,
        'Hello',
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        'h',
        'i',
        'l'
      ],
      5,
      15
    )
  ).toStrictEqual(['l'])
})

test('output#11', () => {
  expect(
    testFn(
      [
        1,
        2,
        3,
        4,
        5,
        'j',
        'k',
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        'n',
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        'o',
        'p',
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        'q',
        'r',
        35,
        36,
        37,
        false
      ],
      1,
      45
    )
  ).toStrictEqual([
    1,
    2,
    3,
    4,
    5,
    'j',
    'k',
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    'n',
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    'o',
    'p',
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    'q',
    'r',
    35,
    36,
    37,
    false
  ])
})

test('output#12', () => {
  expect(
    testFn(
      [
        1,
        2,
        3,
        4,
        5,
        'j',
        'k',
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        'n',
        17,
        18,
        19,
        20,
        21,
        22
      ],
      2,
      0
    )
  ).toStrictEqual([
    1,
    2,
    3,
    4,
    5,
    'j',
    'k',
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    'n',
    17,
    18,
    19,
    20,
    21,
    22
  ])
})

test('output#13', () => {
  expect(
    testFn(
      [
        1,
        2,
        3,
        4,
        5,
        'j',
        'k',
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        'n',
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        'o',
        'p',
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        'q',
        'r',
        35,
        36,
        37,
        false
      ],
      2,
      -100
    )
  ).toStrictEqual([
    1,
    2,
    3,
    4,
    5,
    'j',
    'k',
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    'n',
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    'o',
    'p',
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    'q',
    'r',
    35,
    36,
    37,
    false
  ])
})

test('output#14', () => {
  expect(
    testFn(
      [
        1,
        2,
        3,
        4,
        5,
        'j',
        'k',
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        'n',
        17,
        18,
        19,
        20,
        21,
        22
      ],
      0,
      12
    )
  ).toStrictEqual([
    1,
    2,
    3,
    4,
    5,
    'j',
    'k',
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    'n',
    17,
    18,
    19,
    20,
    21,
    22
  ])
})

test('output#15', () => {
  expect(
    testFn(
      [
        1,
        2,
        3,
        4,
        5,
        'j',
        'k',
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        'n',
        17
      ],
      -5,
      10
    )
  ).toStrictEqual([
    1,
    2,
    3,
    4,
    5,
    'j',
    'k',
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    'n',
    17
  ])
})
