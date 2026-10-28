//Реализуйте вспомогательный тип If<C, T, F>, который принимает условие C, истинное значение Tи ложное значение F. 
//C Ожидается, что он будет либо true либо, false а T может F быть любого типа.

type If<C extends boolean, T, F> = C extends true ? T : F;

type A = If<true, 'a', 'b'>  // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'
