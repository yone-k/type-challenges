// オブジェクトの型をマッピングルールに従って変換する型
type MapTypes<T, R> = {
  [K in keyof T]: T[K] extends R extends { mapFrom: infer F, mapTo: infer To } 
    ? F extends T[K] 
      ? R extends { mapFrom: T[K], mapTo: infer U } 
        ? U 
        : never 
      : T[K] 
    : T[K]
}
