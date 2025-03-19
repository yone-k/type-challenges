// オブジェクト型からドット記法で指定されたパスのプロパティを削除する
type DeepOmit<T, K extends string> = K extends `${infer F}.${infer R}`
  ? F extends keyof T
    ? {
        [P in keyof T]: P extends F
          ? DeepOmit<T[P], R>
          : T[P]
      }
    : T
  : {
      [P in keyof T as P extends K ? never : P]: T[P]
    }
