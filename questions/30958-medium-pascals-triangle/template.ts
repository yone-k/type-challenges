// 配列の最後の要素を取得する
type GetLast<T extends any[]> = T extends [...any, infer L] ? L : []
// 数値Nを長さNの配列に変換する再帰型
type Counter<N extends number, _Result extends 1[] = []> = _Result[`length`] extends N | 999 /*max*/ ? _Result :
    Counter<N, [1, ..._Result]>
// 数値A,Bの加算を配列の長さで表現する
type Add<A extends number, B extends number> = [...Counter<A>, ...Counter<B>][`length`]
// 隣接する要素同士の和を計算して新しい配列を作成する
type PileUp<T extends number[], _Result extends any[] = [T[0]]> = T extends [infer F extends number, infer S extends number, ...infer R extends number[]] ? PileUp<[S, ...R], [..._Result, Add<F, S>]> :
    [..._Result, T[0]] /*return*/

// パスカルの三角形をN行生成する再帰型
type Pascal<N extends number, _Result extends any[][] = [[1]]> = _Result[`length`] extends N | 999 /*max*/ ? _Result :
    Pascal<N, [..._Result, PileUp<GetLast<_Result>>]>