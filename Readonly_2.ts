/** 
Реализуйте обобщенный тип MyReadonly2<T, K>, принимающий два аргумента типа T и K.

K Укажите набор свойств, для Tкоторых следует установить значение "Только для чтения". 
Если Kэто значение не указано, все свойства должны быть доступны только для чтения, как и в обычном случае Readonly<T>.
*/

interface Todo {
  title: string
  description: string
  completed: boolean
}

type MyReadonly2<T, K extends keyof T> = {
  readonly [N in K]: T[N]
} & {
  [N in keyof T as N extends K ? never : N]: T[N]
};

const todo: MyReadonly2<Todo, 'title' | 'description'> = {
  title: "Hey",
  description: "foobar",
  completed: false,
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK

