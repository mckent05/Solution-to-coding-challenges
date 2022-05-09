// Start with your code from LinkedList challenge.

class Queue {
  constructor(myList) {
      myList = [];
      this.myList = myList
  }

  add(number) {
      this.myList.push(number)
  }

  remove() {
      if( this.myList.length > 0) {
          return this.myList.shift()
      }
      else {
          return -1
      }
  }
}
const queue = new Queue()

queue.add(3)
queue.add(5)
console.log(queue.remove())
// => 3

queue.add(2)
queue.add(7)
console.log(queue.remove())
// => 5

console.log(queue.remove())
// => 2

console.log(queue.remove())
// => 7

console.log(queue.remove())
// => -1

module.exports = Queue
