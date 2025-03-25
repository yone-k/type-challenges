// 2つの配列の長さを比較する
type CompareArrayLength<T extends any[], U extends any[]> = 
  T extends [...U, ...infer Rest1]
    ? Rest1['length'] extends 0
      ? 0
      : 1
    : U extends [...T, ...infer Rest2]
      ? Rest2['length'] extends 0
        ? 0
        : -1
      : 0
