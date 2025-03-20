// 数値が奇数かどうかを判定する
type IsOdd<T extends number> = number extends T
  ? false
  : `${T}` extends `${number}.${string}` | `${string}e${string}`
    ? false
    : `${T}` extends `${string}${0 | 2 | 4 | 6 | 8}`
      ? false
      : true
