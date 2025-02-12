// 再帰的に配列の両端から要素を削除して中央の要素を取得する
type GetMiddleElement<T extends unknown[]> = 
  T extends [infer First, ...infer Middle, infer Last]
    ? Middle extends []
      ? [First, Last]
      : GetMiddleElement<Middle>
    : T extends [infer Single]
      ? [Single]
      : []
