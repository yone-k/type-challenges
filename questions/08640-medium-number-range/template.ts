// 指定された範囲の数値のユニオン型を生成する型
type NumberRange<L extends number, H extends number, A extends any[] = [], Res = never> =
  A['length'] extends L
    ? A['length'] extends H
      ? L | Res
      : NumberRange<L, H, [...A, 0], A['length'] | Res>
    : NumberRange<L, H, [...A, 0], Res>
