// 数値から1を引く型
// ”型のインスタンス化は非常に深く、無限である可能性があります。” のエラー解消が難しい。小さい数値でのみ動作する。
type BuildArray<L extends number, Arr extends unknown[] = []> =
  Arr['length'] extends L
    ? Arr
    : BuildArray<L, [...Arr, unknown]>

type MinusOne<T extends number> =
  T extends 0
    ? -1
    : BuildArray<T> extends [...infer U, unknown]
      ? U['length']
      : never
