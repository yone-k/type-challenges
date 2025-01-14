// 2つのタプルの対応する要素をペアにして新しいタプルを作成する型
// 再帰的に処理し、どちらかのタプルが空になったらそこで終了する
type Zip<T extends any[], U extends any[]> =
  T extends [infer TFirst, ...infer TRest]
    ? U extends [infer UFirst, ...infer URest]
      ? [[TFirst, UFirst], ...Zip<TRest, URest>]
      : []
    : []
