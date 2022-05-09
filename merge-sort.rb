def full_merge_sort(numbers)
  # write your code here

  if numbers.size <= 1
    return numbers
  end

  array_size   = numbers.size
  half_of_size = (array_size / 2).round

  left_array  = numbers.take(half_of_size)
  right_array = numbers.drop(half_of_size)

  sorted_left_array = full_merge_sort(left_array)
  sorted_right_array = full_merge_sort(right_array)

  merge(sorted_left_array, sorted_right_array)
end

# This then creates a new array, loops through the left/right arrays and places the lowest number into the array. 
def merge(left_array, right_array)
  if right_array.empty?
    return left_array # We have nothing to compare. Left wins.
  end

  if left_array.empty?
    return right_array # We have nothing to compare. Right wins.
  end

  smallest_number = if left_array.first <= right_array.first
    left_array.shift
  else
    right_array.shift
  end

  # We keep doing it until the left or right array is empty.
  recursive = merge(left_array, right_array)

  # Okay, either left or right array are empty at this point. So we have a result.
  # smallest_number = smallest_number.split(" ")[1]
  [smallest_number].concat(recursive)
  
end

p full_merge_sort(["0 ab", "6 cd", "0 ef", "6 gh", "4 ij", "0 ab", "6 cd", "0 ef", "6 gh", "0 ij", "4 that", "3 be", "0 to", "1 be", "5 question", "1 or", "2 not", "4 is", "2 to", "4 the"])
# => ["ab", "ef", "ab", "ef", "ij", "to", "be", "or", "not", "to", "be", "ij", "that", "is", "the", "question", "cd", "gh", "cd", "gh"]

