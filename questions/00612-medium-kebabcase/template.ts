// キャメルケースやパスカルケースの文字列をケバブケースに変換する型
// 大文字が来た場合に、その前に'-'を追加し、全体を小文字に変換する
// ただし、文字列の最初の大文字の場合は'-'を追加しない
type KebabCase<S extends string, IsFirst extends boolean = true> = 
  S extends ''
    ? S
    : S extends `${infer F}${infer R}`
      ? F extends '-'
        ? `${F}${KebabCase<R, false>}`
        : F extends Uppercase<F>
          ? F extends Lowercase<F>
            ? `${F}${KebabCase<R, false>}`
            : IsFirst extends true
              ? `${Lowercase<F>}${KebabCase<R, false>}`
              : `-${Lowercase<F>}${KebabCase<R, false>}`
          : `${F}${KebabCase<R, false>}`
      : S;
