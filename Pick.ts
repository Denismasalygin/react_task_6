//Реализуйте встроенный Pick<T, K>обобщенный тип, не используя его.

//Создает тип, выбирая набор свойств K из T

interface Todo {
  title: string
  description: string
  completed: boolean
}

type MyPick<T, K extends keyof T> = {
    [N in K]: T[N]
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}
