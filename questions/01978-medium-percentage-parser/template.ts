// パーセンテージ文字列をパースして、[符号, 数値, パーセント記号]の形式のタプル型を返す型
// 符号: '+', '-', または ''
// 数値: 数字の文字列または ''
// パーセント記号: '%' または ''

// 符号部分を抽出する
type ParseSign<S extends string> = S extends `${infer F}${infer R}`
  ? F extends '+' | '-'
    ? [F, R]
    : ['', S]
  : ['', ''];

// パーセント記号を抽出する
type ParsePercent<S extends string> = S extends `${infer R}%`
  ? [R, '%']
  : [S, ''];

// 完全な分解処理
type PercentageParser<A extends string> = A extends ''
  ? ['', '', '']
  : ParseSign<A> extends [infer S extends string, infer R extends string]
    ? ParsePercent<R> extends [infer N extends string, infer P extends string]
      ? [S, N, P]
      : never
    : never;
