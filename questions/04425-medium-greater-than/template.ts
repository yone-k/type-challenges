// タプルを用いて数値の大小比較を行う型
// 各数値に対応する長さのタプルを生成し、比較する
type GreaterThan<T extends number, U extends number, A extends any[] = []> = 
  T extends A['length'] 
    ? false 
    : U extends A['length'] 
      ? true 
      : GreaterThan<T, U, [...A, any]>
