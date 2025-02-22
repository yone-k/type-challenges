// 配列から指定した型の要素だけをフィルタリングする
type Filter<T extends any[], P> = T extends [infer First, ...infer Rest]
  ? [First] extends [P]
    ? [First, ...Filter<Rest, P>]
    : Filter<Rest, P>
  : []
