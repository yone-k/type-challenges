// 指定されたプロパティを読み取り専用にする型。交差型を使用して、Kに指定されたプロパティは読み取り専用にし、それ以外のプロパティはそのままの型で保持する。Kが指定されない場合はデフォルトですべてのプロパティを読み取り専用にする。
type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P]
} & {
  [P in keyof T as P extends K ? never : P]: T[P]
}
