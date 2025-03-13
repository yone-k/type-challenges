// 2つの型が等価かどうかを厳密に判定する
type IsEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false

// タプル内で指定された型が最初に現れるインデックスを取得する
type FindIndex<T extends unknown[], U, Start extends any[] = []> = 
  T extends [infer First, ...infer Rest] 
    ? IsEqual<First, U> extends true 
      ? Start['length'] 
      : FindIndex<Rest, U, [...Start, any]> 
    : -1

// タプル内に重複する型が存在するかどうかを再帰的にチェックする
type CheckRepeatedTuple<T> = 
  T extends unknown[] 
    ? T extends [infer F, ...infer R] 
      ? FindIndex<R, F> extends -1 
        ? CheckRepeatedTuple<R> 
        : true 
      : false 
    : false
