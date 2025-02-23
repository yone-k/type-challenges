// 文字列内の全てのパターンの出現位置（インデックス）を取得する
type FindAll<T extends string, P extends string, I extends number[] = [], Pos extends 1[] = []> =
  P extends ''
    ? []
    : T extends ''
      ? I
      : T extends `${infer First}${infer Rest}`
        ? T extends `${P}${infer _}`
          ? FindAll<Rest, P, [...I, Pos['length']], [...Pos, 1]>
          : FindAll<Rest, P, I, [...Pos, 1]>
        : I
