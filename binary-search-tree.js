class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class BST {
    constructor () {
        this.root = null
    }
  insert(data) {
    //your code here
    const node = this.root
    if (node === null) {
      this.root = new Node(data)
      return;
    } else {
        const searchBinaryTree = (node) => {
          if (data < node.data) {
            if( node.left === null) {
              node.left = new Node(data)
              return;
            } else if (node.left !==null) {
              searchBinaryTree(node.left)
              return;
            }
          } else if (data > node.data) {
            if( node.right === null) {
              node.right = new Node(data)
              return;
            } else if (node.right !== null) {
              searchBinaryTree(node.right)
              return;
            }
          } else {
            return null
          }
        }
        return searchBinaryTree(node)
      }
  }

  preOrder(node = this.root) {
    //implementation from the previous challenge
    if (node === null) {
      return ''
    }

    let result = `${node.data} `
    result += this.preOrder(node.left)
    result += this.preOrder(node.right)
    return result
  }
}


function binarySearchTree(array) {
  const tree = new BST()
  array.forEach(e => tree.insert(e))
  return tree.preOrder()
}

console.log(binarySearchTree([8, 3, 10, 1, 6, 14, 4, 7, 13]))
// => "8 3 1 6 4 7 10 14 13"

module.exports = binarySearchTree
