//Реализуйте универсальную версию Array.push

type Push<T extends Array<any>, K extends any> = [...T, K];

type Result = Push<[1, 2], '3'> // [1, 2, '3']
