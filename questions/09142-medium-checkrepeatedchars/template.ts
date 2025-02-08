// 文字列に重複する文字が含まれているかをチェックする型
type CheckRepeatedChars<T extends string, Chars extends string = never> = 
  T extends `${infer First}${infer Rest}`
    ? First extends Chars
      ? true
      : CheckRepeatedChars<Rest, Chars | First>
    : false
