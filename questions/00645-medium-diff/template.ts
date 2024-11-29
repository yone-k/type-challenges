// 2つのオブジェクト型の差分を取得する型。片方のオブジェクトにしか存在しないプロパティのみを持つ型を生成する。
type Diff<O, O1> = {
  [K in Exclude<keyof O | keyof O1, keyof O & keyof O1>]: K extends keyof O 
    ? O[K] 
    : K extends keyof O1 
      ? O1[K] 
      : never
}
