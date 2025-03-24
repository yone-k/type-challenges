// 固定文字列リテラル型かどうかを判定する
type IsFixedStringLiteralType<S extends string> = {} extends Record<S, 1> ? false : Equal<[S], S extends unknown ? [S] : never>