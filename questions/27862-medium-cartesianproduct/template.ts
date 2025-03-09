// 2つの集合（ユニオン型）のデカルト積を計算する
type CartesianProduct<T, U> = T extends infer TItem
  ? U extends infer UItem
    ? [TItem, UItem]
    : never
  : never
