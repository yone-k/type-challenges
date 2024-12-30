// 関数の引数型タプルを取得し、型内で定義したReverseArgsを使用して逆順にした後、同じ戻り値型で新しい関数型を構築する
type ReverseArgs<T extends any[]> = T extends [...infer Rest, infer Last] ? [Last, ...ReverseArgs<Rest>] : []

type FlipArguments<T extends (...args: any[]) => any> = T extends (...args: infer Args) => infer Return
  ? (...args: ReverseArgs<Args>) => Return
  : never
