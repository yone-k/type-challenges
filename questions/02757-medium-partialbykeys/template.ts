// 指定されたキーのプロパティをオプショナルにする型を作成する
type PartialByKeys<T, K extends keyof T = keyof T> = {
  [P in keyof T as P extends K ? P : never]?: T[P]
} & {
  [P in keyof T as P extends K ? never : P]: T[P]
} extends infer O ? { [P in keyof O]: O[P] } : never
