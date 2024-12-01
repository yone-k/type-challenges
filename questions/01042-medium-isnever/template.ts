// 型パラメータがnever型であるかをチェックする型
// neverの特殊な振る舞いを考慮し、配列に包んで比較することで正確に検出する
type IsNever<T> = [T] extends [never] ? true : false
