// ユニオン型からその要素の全ての並び替えを生成する型。
// ユニオン型の分配条件型とExcludeを使用して再帰的に構築する。
// 1. Tがneverの場合（要素が無い場合）は空配列を返す
// 2. それ以外の場合、Kの各要素を先頭に配置し、残りの要素（Kを除いたT）に対して再帰的にPermutationを適用する
// KにデフォルトでTを代入することで、最初の呼び出しでは全ての要素を考慮する
type Permutation<T, K = T> = 
  [T] extends [never] 
    ? [] 
    : K extends K 
      ? [K, ...Permutation<Exclude<T, K>>] 
      : never
