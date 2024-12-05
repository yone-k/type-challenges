// オブジェクト型からインデックスシグネチャを削除する型
// インデックスシグネチャの特性として、キーが文字列リテラル、数値リテラル、またはシンボルリテラルの場合にのみ保持する
type RemoveIndexSignature<T> = {
  [K in keyof T as string extends K 
    ? never 
    : number extends K 
      ? never 
      : symbol extends K 
        ? never 
        : K
  ]: T[K]
}
