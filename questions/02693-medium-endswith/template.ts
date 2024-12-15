// テンプレートリテラル型と条件型を使用して、文字列Tが文字列Uで終わるかどうかを判定する
type EndsWith<T extends string, U extends string> = T extends `${infer _}${U}` ? true : false
