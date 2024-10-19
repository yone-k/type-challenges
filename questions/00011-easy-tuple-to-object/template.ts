type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P
}

// MEMO
// PropertyKey = string | number | symbol
// というオブジェクトのKeyの取りうる値の型がある
