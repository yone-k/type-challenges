// ハノイの塔の移動手順を再帰的に生成する型
type Hanoi<
    N extends number,
    From = "A",
    To = "B",
    Intermediate = "C",
    CurrentIndex extends 1[] = []
> = CurrentIndex["length"] extends N
    ? []
    : [
        ...Hanoi<N, From, Intermediate, To, [...CurrentIndex, 1]>,
        [From, To],
        ...Hanoi<N, Intermediate, To, From, [...CurrentIndex, 1]>
    ]