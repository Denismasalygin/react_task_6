/**
Дана последовательность символов: преобразуйте массив в объектный тип, при этом ключ/значение должны присутствовать в предоставленном массиве.
*/

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type TupleToObject<T extends readonly string[]> = {
    [N in T[number]]: N
}

type result = TupleToObject<typeof tuple>
// expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

