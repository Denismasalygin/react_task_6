/**
Реализуйте функцию JavaScript Array.concatв системе типов. Тип принимает два аргумента. 
Выходные данные должны представлять собой новый массив, включающий входные данные в порядке возрастания (ltr).
*/

type Concat<T extends Array<any>, K extends Array<any>> = [...T, ...K];

type Result = Concat<[1], [2]> // expected to be [1, 2]
