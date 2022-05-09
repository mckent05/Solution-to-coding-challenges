// module.exports = 

function sqrt(number) {
  return sqrt_recursive(1, number, number)
}

function sqrt_recursive(min_interval, max_interval, number) {
  // write your code here
  if(number ==0 || number ==1){
    return number;
  }
  let mid = parseInt((min_interval + max_interval)/2);
  if(mid * mid <= number && (mid +1) * (mid+1) > number) {
    return mid;
  }
  if(mid*mid < number) {
    return sqrt_recursive(mid + 1, max_interval, number);
  }
  else {
    return sqrt_recursive(min_interval, mid-1, number)
  }
}

console.log(sqrt(25))
console.log(sqrt(7056))
