// 型を再帰的に読み取り専用にする型。オブジェクト型の場合は各プロパティに対してDeepReadonlyを再帰的に適用するが、関数型の場合はそのまま返す。
type DeepReadonly<T> = T extends object ?
  T extends Function ? T : {
    readonly [K in keyof T]: DeepReadonly<T[K]>
  } : T
