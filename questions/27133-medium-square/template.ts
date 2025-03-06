// 数値の二乗を計算する
// タプル型が大きすぎて表現できなくなる問題がある
type Abs<N extends number> = `${N}` extends `-${infer R extends number}` ? R : N
type SplitZeroes<
    N extends number,
    Z extends string = ''
> = `${N}` extends `${infer N extends number}0` ? SplitZeroes<N, `${Z}00`> : [N, Z]
type SquareTuple<
    N extends number,
    A extends any[] = [],
    Acc extends any[] = []
> = A['length'] extends N ? [...A, ...Acc] : SquareTuple<N, [1, ...A], [...A, ...A, ...Acc]>

type Square<
    _N extends number,
    N extends [number, string] = SplitZeroes<_N>,
    U extends any[] = SquareTuple<Abs<N[0]>>
> = `${U['length']}${N[1]}` extends `${infer N extends number}` ? N : never