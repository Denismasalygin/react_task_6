/**
Реализуйте встроенный Readonly<T>обобщенный тип, не используя его.

Создает тип, у которого все свойства типа T установлены в режим только для чтения, то есть свойства созданного типа не могут быть переназначены.
*/

interface Todo {
  title: string
  description: string
}

type MyReadonly<T> = {
  readonly [N in keyof T]: T[N]
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar"
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
