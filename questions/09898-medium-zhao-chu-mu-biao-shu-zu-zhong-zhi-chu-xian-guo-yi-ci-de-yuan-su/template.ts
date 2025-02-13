// 配列内で一度だけ出現する要素を抽出する型
type IncludesInUnion<U, T> = [U] extends [never]
    ? false
    : U extends T
    ? true
    : false

type FindEles<
    T extends unknown[],
    Duplicates extends unknown[] = [],
> = T extends [infer Head, ...infer Tail]
    ? IncludesInUnion<Duplicates[number] | Tail[number], Head> extends false
    ? [Head, ...FindEles<Tail, Duplicates>]
    : FindEles<Tail, [...Duplicates, Head]>
    : T