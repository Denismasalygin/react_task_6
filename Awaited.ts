/**
Если у нас есть тип, который является обернутым типом, например, Promise, как мы можем получить тип, который находится внутри обернутого типа?

Например: если у нас есть, Promise<ExampleType>как получить ExampleType?
*/

type ExampleType = Promise<string>

type MyAwaited<T> = T extends Promise<infer K> ? MyAwaited<K> : T;

type Result = MyAwaited<ExampleType> // string


