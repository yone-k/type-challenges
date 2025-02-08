// 配列の全ての部分列を生成する型
type Subsequence<T extends any[]> = 
  T extends [infer F, ...infer R]
    ? [] | [F] | [F, ...Subsequence<R>] | Subsequence<R>
    : []
