interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}

// 二分木の中順走査（左->根->右）を実装する型
// nullの場合は空配列、それ以外の場合は左、根、右の順で再帰的に処理して結果を結合する
type InorderTraversal<T extends TreeNode | null> =
  T extends TreeNode
    ? [
        ...(T['left'] extends TreeNode ? InorderTraversal<T['left']> : []),
        T['val'],
        ...(T['right'] extends TreeNode ? InorderTraversal<T['right']> : [])
      ]
    : []
