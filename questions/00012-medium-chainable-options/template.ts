// メソッドチェーンでオプションを設定できる型を実装。ジェネリックパラメータTで現在の状態を保持し、option呼び出しごとにTに新しいプロパティを追加する。
// 同じキーが2回使用されないように、キーがすでにTに存在する場合はnever型となるように制約する。
type Chainable<T = {}> = {
  option<K extends string, V>(key: K extends keyof T ? never : K, value: V): Chainable<Omit<T, K> & { [P in K]: V }>
  get(): T
}
