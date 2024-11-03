// Promise.all関数の型定義。入力配列の各要素がPromiseの場合はその解決値を、Promiseでない場合はそのまま値を持つ配列を返すPromiseを表現。
declare function PromiseAll<T extends unknown[]>(values: readonly [...T]): Promise<{ [K in keyof T]: Awaited<T[K]> }>
