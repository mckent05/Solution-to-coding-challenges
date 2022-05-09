class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}

class LinkedList {
  // setup head and tail
  constructor (myList) {
    myList=[]
    this.myList = myList
  }

  add(number) {
    // your code here
    this.myList.push(number)
  }

  get(index) {
    // your code here
    return this.myList[index]
  }
}

const list = new LinkedList();

list.add(3);
list.add(5);
console.log(list.get(1));
// => 5

module.exports = LinkedList;
