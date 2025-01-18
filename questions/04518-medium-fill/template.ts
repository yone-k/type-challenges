// 配列の指定された範囲を指定値で埋める型
// カウンタとフラグを用いて再帰的に処理し、StartからEnd-1の範囲の要素をNで置き換える
type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  Count extends any[] = [],
  Flag extends boolean = Count['length'] extends Start ? true : false,
> = Count['length'] extends End
  ? T
  : T extends [infer R, ...infer U]
    ? Flag extends false
      ? [R, ...Fill<U, N, Start, End, [...Count, 0]>]
      : [N, ...Fill<U, N, Start, End, [...Count, 0], Flag>]
    : T
