// 配列から指定された要素を除外する型
// U が配列の場合はその要素のユニオン型に変換し、各要素を比較して除外する
type Without<T extends unknown[], U> = T extends [infer F, ...infer R]
  ? F extends (U extends unknown[] ? U[number] : U)
    ? Without<R, U>
    : [F, ...Without<R, U>]
  : []
