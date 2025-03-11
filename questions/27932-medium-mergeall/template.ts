// 複数のオブジェクト型をマージし、重複するキーの値をユニオン型にする
type MergeAll<XS extends object[], Result = {}> = XS extends []
  ? Result
  : XS extends [infer First extends object, ...infer Rest extends object[]]
    ? MergeAll<
        Rest,
        {
          [K in keyof Result | keyof First]: K extends keyof First
            ? K extends keyof Result
              ? Result[K] | First[K]
              : First[K]
            : K extends keyof Result
              ? Result[K]
              : never
        }
      >
    : never
