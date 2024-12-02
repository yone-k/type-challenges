// 型パラメータがユニオン型かどうかをチェックする型
// ユニオン型に対する条件型の分配特性を利用
type IsUnion<T, U = T> = 
  [T] extends [never] 
    ? false 
    : T extends U 
      ? [U] extends [T] 
        ? false 
        : true 
      : never
