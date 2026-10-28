//Реализуйте версию типаArray.unshift

type Unshift<T extends Array<any>, K extends any> = [K, ...T];

type Result = Unshift<[1, 2], 0> // [0, 1, 2]

