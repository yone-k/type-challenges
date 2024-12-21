// readonlyモディファイアを除去してミュータブルなプロパティにする型を作成する
type Mutable<T extends object> = {
  -readonly [P in keyof T]: T[P]
}
