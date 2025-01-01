// 配列をパラメータで指定された深さまでフラット化する型
// Countはタプル型で深さをカウントするために使用する（型システムでの数値計算）
type FlattenOnce<T extends unknown[]> = T extends [infer F, ...infer R]
  ? F extends unknown[]
    ? [...F, ...FlattenOnce<R>]
    : [F, ...FlattenOnce<R>]
  : []

type FlattenDepth<T extends unknown[], D extends number = 1, Count extends unknown[] = []> =
  Count['length'] extends D
    ? T
    : FlattenDepth<FlattenOnce<T>, D, [...Count, unknown]>
