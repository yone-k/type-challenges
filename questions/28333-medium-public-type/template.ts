// オブジェクト型から先頭が_で始まるキーを削除する
type PublicType<T extends object> = {
  [K in keyof T as K extends `_${string}` ? never : K]: T[K]
}
