// 配列を平坦化する型。再帰と条件型を使用して、配列の各要素を処理する。
// 1. 配列が空の場合、空配列を返す
// 2. 配列が空でない場合、先頭要素(First)と残りの要素(Rest)に分ける
// 3. Firstが配列の場合、それを平坦化した結果と残りの要素を平坦化した結果を結合する
// 4. Firstが配列でない場合、それを要素としてそのまま保持し、残りの要素を平坦化した結果と結合する
type Flatten<T extends any[]> = 
  T extends [infer First, ...infer Rest] 
    ? First extends any[] 
      ? [...Flatten<First>, ...Flatten<Rest>] 
      : [First, ...Flatten<Rest>] 
    : []
