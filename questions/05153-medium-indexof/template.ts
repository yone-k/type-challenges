// 配列内の指定された要素の最初のインデックスを返す型
// 見つからない場合は-1を返す
type IndexOf<T extends any[], U, I extends any[] = []> =
  T extends [infer F, ...infer R]
    ? Equal<F, U> extends true
      ? I['length']
      : IndexOf<R, U, [...I, 0]>
    : -1

// Equal型ヘルパー
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false
