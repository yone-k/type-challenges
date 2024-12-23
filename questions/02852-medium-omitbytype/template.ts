// 指定された型Uに割り当て可能でないプロパティのみを選択する
type OmitByType<T, U> = {
  [K in keyof T as T[K] extends U ? never : K]: T[K]
}
