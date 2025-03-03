// JSONスキーマをTypeScriptの型に変換する
// プリミティブ型の定義
type Primitives = {
    string: string
    number: number
    boolean: boolean
}

// プリミティブ型の処理（enum処理を含む）
type HandlePrimitives<T, Type extends keyof Primitives> = T extends {
    enum: unknown[]
}
    ? T['enum'][number]
    : Primitives[Type]

// オブジェクト型の処理（required属性の有無で処理を分岐）
type HandleObject<T> = T extends {
    properties: infer Properties extends Record<string, unknown>
}
    ? T extends { required: infer Required extends unknown[] }
    ? Omit<
        {
            [K in Required[number] & keyof Properties]: JSONSchema2TS<
                Properties[K]
            >
        } & {
            [K in Exclude<keyof Properties, Required[number]>]?: JSONSchema2TS<
                Properties[K]
            >
        },
        never
    >
    : {
        [K in keyof Properties]?: JSONSchema2TS<Properties[K]>
    }
    : Record<string, unknown>

// 配列型の処理
type HandleArray<T> = T extends { items: infer Items }
    ? JSONSchema2TS<Items>[]
    : unknown[]

// メインの型変換処理
type JSONSchema2TS<T> = T extends { type: infer Type }
    ? Type extends keyof Primitives
    ? HandlePrimitives<T, Type>
    : Type extends 'object'
    ? HandleObject<T>
    : HandleArray<T>
    : never