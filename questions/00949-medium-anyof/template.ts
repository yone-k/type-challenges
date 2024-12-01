// 配列内の少なくとも1つの要素が真値であるかをチェックする型
// 偽値: 0, '', false, [], {}, undefined, null
// 真値: 他のすべての値
type FalsyValues = 0 | '' | false | [] | Record<string, never> | undefined | null

type AnyOf<T extends readonly any[]> = 
  T extends [infer First, ...infer Rest]
    ? First extends FalsyValues
      ? AnyOf<Rest>
      : true
    : false
