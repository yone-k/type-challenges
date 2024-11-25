// 2つのオブジェクト型をマージする型。マージの際、キーが重複する場合は2つ目のオブジェクト(S)の型が優先される。
// マップド型を使用し、キーはFとSの全てのキーの合併型とし、以下の条件に従って値の型を決定する：
// 1. キーがSに存在する場合、Sのその属性の型を使用
// 2. キーがSに存在せずFに存在する場合、Fのその属性の型を使用
// 3. どちらにも存在しない場合は「never」（この条件は実際には起こりえない）
type Merge<F extends Record<string, any>, S extends Record<string, any>> = {
  [K in keyof F | keyof S]: K extends keyof S 
    ? S[K] 
    : K extends keyof F 
      ? F[K] 
      : never
}
