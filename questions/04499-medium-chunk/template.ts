// 配列から指定された長さの部分配列を取り出す補助型
type TakeN<T extends any[], N extends number, Result extends any[] = []> =
  Result['length'] extends N
    ? Result
    : T extends [infer F, ...infer R]
      ? TakeN<R, N, [...Result, F]>
      : Result;

// 配列の先頭から指定された数の要素を取り除く補助型
type DropN<T extends any[], N extends number, Count extends any[] = []> =
  Count['length'] extends N
    ? T
    : T extends [any, ...infer R]
      ? DropN<R, N, [...Count, 0]>
      : [];

// 配列を指定されたサイズのチャンクに分割する型
type Chunk<T extends any[], N extends number, Result extends any[] = []> =
  T extends []
    ? Result
    : [...Result, TakeN<T, N>] extends infer NewResult
      ? Chunk<DropN<T, N>, N, NewResult extends any[] ? NewResult : never>
      : never;
