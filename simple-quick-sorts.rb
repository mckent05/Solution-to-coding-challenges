def simple_quicksort(array)
  # write your code here
  if array.length <=1
        return array
    end
    left_array = []
    right_array = []
    first= array[0]
    

    (1...array.length).each do |num|
        if array[num] < first
            left_array << array[num]
        else
            right_array << array[num]
        end
    end
    new_array = sort_array(left_array)
    new_array << first

    sort_array(right_array).each do |element|
        new_array << element
    end

    puts new_array.join(' ')
    return new_array
  
end
