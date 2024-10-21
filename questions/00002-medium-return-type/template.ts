// 関数型Tが(...args: any[]) => infer Rの形式に一致するかを条件型で判定し、一致する場合は推論された戻り値の型Rを返す。一致しない場合はneverを返す。
type MyReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : never
