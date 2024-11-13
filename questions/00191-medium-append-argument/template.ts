// 関数型に新しい引数を追加する型。ジェネリックパラメータFnに制約を設けて関数型のみを受け付けるようにする。
// 条件型とinferキーワードを使用して、既存の関数の引数リスト(Args)と戻り値の型(Return)を抽出し、
// スプレッド構文を使って新しい引数Aをパラメータ名「x」として追加した新しい関数型を返す。
type AppendArgument<Fn extends (...args: any[]) => any, A> = 
  Fn extends (...args: infer Args) => infer Return 
    ? (...args: [...Args, x: A]) => Return
    : never
