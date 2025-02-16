// 配列内の各要素の出現回数をカウントするオブジェクトを生成する
type GetValueType<T> = 
  T extends readonly (infer I)[] 
    ? I extends readonly (infer J)[] 
      ? GetValueType<J> | I 
      : I | T[number]
    : T

type CountElementNumberToObject<
  T extends readonly unknown[],
  U = GetValueType<T>,
  V = U extends string | number 
      ? U 
      : never
> = { 
  [K in V & (string | number)]: CountItem<T, K>
}

type CountItem<
  T extends readonly unknown[], 
  I extends string | number, 
  A extends 1[] = []
> = T extends readonly [infer H, ...infer R] 
  ? H extends I 
    ? CountItem<R, I, [...A, 1]> 
    : H extends readonly unknown[] 
      ? CountItem<[...R, ...H], I, A> 
      : CountItem<R, I, A>
  : A["length"]
