/**
Реализуйте встроенный Omit<T, K>обобщенный тип, не используя его.

Создает тип, выбирая все свойства из Tи затем удаляя их.K
*/

interface Todo {
  title: string
  description: string
  completed: boolean
}

type MyOmit<T, K extends keyof T> = {
  [N in keyof T as N extends K ? never : N]: T[N]
};

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false,
}

