// 配列の末尾から要素を取り出し、残りの配列を再帰的に逆順にして新しい配列を構築する
type Reverse<T extends any[]> = T extends [...infer Rest, infer Last] ? [Last, ...Reverse<Rest>] : []
