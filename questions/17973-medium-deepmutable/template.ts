// オブジェクトの全プロパティを再帰的にmutableにする
type DeepMutable<T extends Record<keyof any, any>> =
    T extends (...args: any[]) => any ?
    T :
    {
        - readonly [K in keyof T]: DeepMutable<T[K]>
    }
