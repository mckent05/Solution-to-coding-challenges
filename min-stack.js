class Stack {
  constructor(myList) {
    myList = [];
    this.myList = myList;
  }

  push(number) {
    this.myList.push(number);
  }

  pop() {
    return this.myList.pop();
  }
  
  min() {
    return Math.min.apply(null, this.myList)
  }
}

const stack = new Stack()
stack.push(3)
stack.push(5)
console.log(stack.min())
// => 3

stack.pop()
stack.push(7)
console.log(stack.min())
// => 3

stack.push(2)
console.log(stack.min())
// => 2

stack.pop()
console.log(stack.min())
// => 3

module.exports = Stack
