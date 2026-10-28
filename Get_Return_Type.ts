// Реализуйте встроенный ReturnType<T>обобщенный тип, не используя его.

const fn = (v: boolean) => {
  if (v)
    return 1
  else
    return 2
}

type MyReturnType<T> = T extends (K: any) => infer args ? args : never;

type a = MyReturnType<typeof fn> // should be "1 | 2"

