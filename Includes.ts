/**
Реализуйте функцию JavaScript Array.includesв системе типов. 
Тип принимает два аргумента. 
Выходные данные должны быть логическим значением true или false.
*/

type Includes<T extends Array<string>, K extends string> = T extends [infer First, ...infer Rest] ? K extends First ? true : Includes<Rest, K> : false;

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
