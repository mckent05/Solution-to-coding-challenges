def merge_sort(array1, array2)
  # write your code here
  if array1.empty?
    return array2
  elsif array2.empty?
    return array1    
  end
  get_smallest = if array1.first <= array2.first
    array1.shift
  else
    array2.shift
  end

  resort_merge = merge_sort(array1, array2)
  [get_smallest].concat(resort_merge)

end




p merge_sort([1, 3, 9, 11], [2, 4, 6, 8])
# => [1, 2, 3, 4, 6, 8, 9, 11]
