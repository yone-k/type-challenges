// 文字列内で最初に現れる一意の文字のインデックスを返す型
// 文字列を先頭から走査し、既に出現した文字を_Accに記録
// 現在の文字が_Accに含まれていない場合、残りの文字列に同じ文字が出現するかチェック
// 出現しない場合、その文字が最初の一意の文字となる
type FirstUniqueCharIndex<
  T extends string,
  _Acc extends string[] = []
> = T extends ''
  ? -1
  : T extends `${infer Head}${infer Rest}`
  ? Head extends _Acc[number]
  ? FirstUniqueCharIndex<Rest, [..._Acc, Head]>
  : Rest extends `${string}${Head}${string}`
  ? FirstUniqueCharIndex<Rest, [..._Acc, Head]>
  : _Acc['length']
  : never