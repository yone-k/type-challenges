// テンプレートリテラル型と条件型を使用して、文字列Tが文字列Uで始まるかどうかを判定する
type StartsWith<T extends string, U extends string> = T extends `${U}${infer _}` ? true : false
