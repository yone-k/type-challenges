// オブジェクト型から特定のプロパティの値をオブジェクトとして展開する
type ExtractToObject<T, P extends keyof T> = Omit<Omit<T, P> & T[P], never>