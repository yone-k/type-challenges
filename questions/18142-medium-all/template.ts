// 配列の全要素が指定した値と等しいかを判定する
type All<T extends unknown[], U> = T extends [infer First, ...infer Rest]
  ? Equal<First, U> extends true
    ? All<Rest, U>
    : false
  : true

type Equal<X, Y> = 
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false
