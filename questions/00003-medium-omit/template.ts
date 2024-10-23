// マップド型を使用してTの各プロパティをイテレートし、キーがKに含まれる場合はneverとして除外し、含まれない場合はそのキーを保持する
type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}
