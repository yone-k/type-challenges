// オブジェクトのキーと値を入れ替える型
// 値は文字列、数値、真偽値のみとする
type Flip<T extends Record<string, string | number | boolean>> = {
  [K in keyof T as `${T[K]}`]: K
}
