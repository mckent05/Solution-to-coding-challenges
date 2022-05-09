function hashTable(arr) {
  // write your code here
  const hashTable = []
  hashTable.length= arr.length
  arr.forEach((item) => {
    const indexPosition = Math.abs(item) % arr.length
    if( hashTable[indexPosition] === undefined) {
      hashTable[indexPosition] = [item]
    } else {
        hashTable[indexPosition] = [...hashTable[indexPosition], item]
    }
    
  })
  const tope =[]
  hashTable.forEach(item => {
      item.forEach(myItem => {
          tope.push(myItem)
      })
  })
  return tope
}


console.log(hashTable([12, 24, 125, 5, 91, 1106, 2, 1021, 29, 3536, 10]))
// => [12, 24, 2, 91, 125, 5, 3536, 1106, 29, 1021, 10]

console.log(hashTable([2, 341, 73, 8265, 234004, 602, 7400000, 200000000]))
// => [341, 234004, 2, 200000000, 7400000, 8265, 73, 602]

module.exports = hashTable
