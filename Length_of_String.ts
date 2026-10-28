//Вычислите длину строкового литерала, который ведет себя как String#length.

type LengthOfString<T extends string, Acc extends unknown[] = []> = T extends `${infer First}${infer Rest}` ? LengthOfString<Rest, [...Acc, First]> : Acc['length'];

type A = LengthOfString<'hello'>; // 5

