type Length<T extends readonly unknown[]> = T extends { length: infer L } ? L : never
