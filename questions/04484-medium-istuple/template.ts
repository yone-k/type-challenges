// タプル型かどうかを判定する型
// タプル型は固定長の配列型で、配列型やオブジェクト型と区別する必要がある
type IsTuple<T> =
  [T] extends [never]
    ? false
    : T extends readonly any[]
      ? number extends T['length']
        ? false
        : true
      : false
