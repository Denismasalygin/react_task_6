//Получите то Object, что является разницей между O&O1


type O = {
  name: string;
  age: number;
  city: string;
};

type O1 = {
  age: number;
  city: string;
  country: string;
};

type myDiff<T, K> = {
  [N in keyof T as N extends keyof K ? never : N]: T[N]
} & {
  [N in keyof K as N extends keyof T ? never : N]: K[N]
};
