// 配列から重複要素を取り除いたユニークな配列を返す型
type Unique<T extends any[], Result extends any[] = []> = 
  T extends [infer First, ...infer Rest]
    ? Includes<Result, First> extends true
      ? Unique<Rest, Result>
      : Unique<Rest, [...Result, First]>
    : Result

// 配列に特定の要素が含まれているかをチェックする型
type Includes<T extends any[], U> = 
  T extends [infer First, ...infer Rest]
    ? Equal<First, U> extends true
      ? true
      : Includes<Rest, U>
    : false

// Equal型ヘルパー
type Equal<X, Y> = 
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false
