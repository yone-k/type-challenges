// 配列内の指定された要素が最後に出現するインデックスを返す型
type LastIndexOf<T extends any[], U> = 
  T extends [...infer Rest, infer Last]
    ? Equal<Last, U> extends true
      ? Rest['length'] 
      : LastIndexOf<Rest, U> extends -1
        ? -1
        : LastIndexOf<Rest, U>
    : -1

// Equal型ヘルパー
type Equal<X, Y> = 
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false
