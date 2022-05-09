function leftmostNodesSum(array) {
  // your code here
  let iterationCount = 0;
  let startPoint = 0;
  let sum = array[0]
  let endPoint
  for(var i=0; i <array.length; i++) {
    endPoint =  startPoint + Math.pow(2,iterationCount)
    if (endPoint > array.length-1) {
      break
    } else {
      sum = sum + array[endPoint]
      startPoint= endPoint
      iterationCount++
    }
  }
  return sum
}

// => 11

module.exports = leftmostNodesSum
