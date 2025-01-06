// フィボナッチ数列を計算する型
// 再帰的にF(n) = F(n-1) + F(n-2)を計算し、F(1)=F(2)=1をベースケースとする
type Fibonacci<
  T extends number,
  CurrentIndex extends number[] = [1],
  Prev extends number[] = [],
  Current extends number[] = [1]
> = CurrentIndex['length'] extends T
  ? Current['length']
  : Fibonacci<
      T,
      [...CurrentIndex, 1],
      Current,
      [...Prev, ...Current]
    >
