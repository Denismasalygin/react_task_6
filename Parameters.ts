//Реализуйте встроенный универсальный параметр Parameters, не используя его.

const foo = (arg1: string, arg2: number): void => {}

type MyParameters<T> = T extends (...args: infer K) => any ? K : never;

type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]
